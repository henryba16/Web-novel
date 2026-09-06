// Vercel Speed Insights
// Initialize the speed insights queue
window.si = window.si || function () { 
  (window.siq = window.siq || []).push(arguments); 
};

// Load the Vercel Speed Insights script
(function() {
  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/speed-insights/script.js';
  var firstScript = document.getElementsByTagName('script')[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }
})();
