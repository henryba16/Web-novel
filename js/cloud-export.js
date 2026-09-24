/* global window, Blob, URL, document */
'use strict';
(function () {
  var COLUMNS = [
    'student_email',
    'student_name',
    'class_code',
    'run_started_at',
    'run_finished_at',
    'ending',
    'empathy',
    'awareness',
    'safe',
    'choices'
  ];

  function token() {
    return window.CloudClient.accessToken();
  }

  function displayNameOf(profile, studentId) {
    if (profile && profile.display_name) {
      return profile.display_name;
    }
    if (profile && profile.email) {
      return profile.email;
    }
    return 'Học sinh #' + String(studentId || '').slice(-4);
  }

  /* Same qualitative thresholds as ending.html statTag(). */
  function statTag(value) {
    if (value >= 75) { return 'Cao'; }
    if (value >= 60) { return 'Tốt'; }
    if (value >= 45) { return 'Trung bình'; }
    return 'Cần chú ý thêm';
  }

  /* Direct RLS read: finished runs for one class, plus the class row and
   * the involved student profiles (teacher JWT; RLS enforces isolation). */
  async function fetchFinishedRuns(classId) {
    if (!classId) {
      throw new Error('Class id is required.');
    }
    var t = token();
    var classRows = await window.CloudClient.rest('classes', {
      params: { id: 'eq.' + classId, select: 'id,name,code' },
      token: t
    });
    if (!classRows || !classRows.length) {
      throw new Error('Class not found or not visible to this account.');
    }
    var runs = await window.CloudClient.rest('runs', {
      params: {
        class_id: 'eq.' + classId,
        status: 'eq.finished',
        select: '*',
        order: 'finished_at.desc'
      },
      token: t
    });
    var ids = [];
    (runs || []).forEach(function (r) {
      if (r && r.student_id && ids.indexOf(r.student_id) < 0) {
        ids.push(r.student_id);
      }
    });
    var profilesById = {};
    if (ids.length) {
      var profiles = await window.CloudClient.rest('profiles', {
        params: { id: 'in.(' + ids.join(',') + ')', select: 'id,email,display_name' },
        token: t
      });
      (profiles || []).forEach(function (p) {
        if (p && p.id) {
          profilesById[p.id] = p;
        }
      });
    }
    return { classRow: classRows[0], runs: runs || [], profilesById: profilesById };
  }

  /* One "scene: choice" pair per choice entry, joined with "; ".
   * Line breaks collapse to spaces so every run stays one spreadsheet row. */
  function choicesText(choices) {
    if (!Array.isArray(choices) || !choices.length) {
      return '';
    }
    return choices.map(function (c) {
      var scene = c && c.scene !== undefined ? String(c.scene) : '';
      var pick = c && c.choice !== undefined ? String(c.choice) : '';
      return (scene + ': ' + pick).replace(/[\r\n]+/g, ' ').trim();
    }).join('; ');
  }

  /* RFC-4180 minimal quoting: quote when the field holds a comma, quote,
   * or line break; double any internal quotes. Vietnamese text passes
   * through untouched (UTF-8 BOM added at download time). */
  function csvEscape(value) {
    var s = value === null || value === undefined ? '' : String(value);
    if (/[",\r\n]/.test(s)) {
      return '"' + s.replace(/"/g, '""') + '"';
    }
    return s;
  }

  function rowToRecord(run, classRow, profilesById) {
    var profile = (profilesById || {})[run.student_id] || null;
    return {
      student_email: (profile && profile.email) || '',
      student_name: displayNameOf(profile, run.student_id),
      class_code: (classRow && classRow.code) || '',
      run_started_at: run.started_at || '',
      run_finished_at: run.finished_at || '',
      ending: run.ending_name || '',
      empathy: run.empathy !== undefined && run.empathy !== null ? run.empathy : '',
      awareness: run.awareness !== undefined && run.awareness !== null ? run.awareness : '',
      safe: run.safe !== undefined && run.safe !== null ? run.safe : '',
      choices: choicesText(run.choices)
    };
  }

  /* Builds the CSV body (no BOM — downloadCsv prepends it). */
  function buildCsv(payload) {
    var classRow = payload.classRow;
    var runs = payload.runs || [];
    var profilesById = payload.profilesById || {};
    var lines = [COLUMNS.map(csvEscape).join(',')];
    runs.forEach(function (run) {
      var rec = rowToRecord(run, classRow, profilesById);
      lines.push(COLUMNS.map(function (col) { return csvEscape(rec[col]); }).join(','));
    });
    return lines.join('\r\n') + '\r\n';
  }

  function downloadFilename(classRow) {
    var code = (classRow && classRow.code) || 'lop';
    var stamp = new Date().toISOString().slice(0, 10);
    return 'schoolshield-' + code + '-' + stamp + '.csv';
  }

  /* Teacher clicks Download -> direct RLS read -> Blob -> a[download]. */
  async function downloadCsv(classId) {
    var payload = await fetchFinishedRuns(classId);
    var csv = '﻿' + buildCsv(payload);
    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = downloadFilename(payload.classRow);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    return { filename: a.download, count: payload.runs.length };
  }

  /* Shared aggregates for report.html (and Phase 3 dashboard reuse). */
  function computeAggregates(runs) {
    var list = Array.isArray(runs) ? runs : [];
    var sums = { empathy: 0, awareness: 0, safe: 0 };
    var endings = {};
    var splits = {};
    list.forEach(function (r) {
      if (!r) { return; }
      ['empathy', 'awareness', 'safe'].forEach(function (k) {
        var v = Number(r[k]);
        if (Number.isFinite(v)) { sums[k] += v; }
      });
      var e = r.ending_name || '(chưa rõ)';
      endings[e] = (endings[e] || 0) + 1;
      (Array.isArray(r.choices) ? r.choices : []).forEach(function (c) {
        var scene = (c && c.scene !== undefined ? String(c.scene) : '(chưa rõ)');
        var pick = (c && c.choice !== undefined ? String(c.choice) : '(chưa rõ)');
        if (!splits[scene]) { splits[scene] = {}; }
        splits[scene][pick] = (splits[scene][pick] || 0) + 1;
      });
    });
    var n = list.length;
    function mean(total) {
      return n ? Math.round((total / n) * 10) / 10 : 0;
    }
    return {
      count: n,
      means: { empathy: mean(sums.empathy), awareness: mean(sums.awareness), safe: mean(sums.safe) },
      endings: endings,
      choiceSplits: splits
    };
  }

  window.CloudExport = {
    COLUMNS: COLUMNS,
    fetchFinishedRuns: fetchFinishedRuns,
    choicesText: choicesText,
    csvEscape: csvEscape,
    buildCsv: buildCsv,
    downloadCsv: downloadCsv,
    computeAggregates: computeAggregates,
    statTag: statTag
  };
})();
