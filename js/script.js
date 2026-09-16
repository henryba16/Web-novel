/* global monogatari */

function addempathy(value) {
	monogatari.storage().stats.empathy += value;
}
function addawareness(value) {
	monogatari.storage().stats.awareness += value;
}
function addsafe(value) {
	monogatari.storage().stats.safe += value;
}
 
// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'bike-fall': 'bicycle-fall.mp3',
	'bell': 'school-bell.mp3',
	'clap': 'clap.mp3',
	'school': 'school.mp3',
	'heel-walk': "heel-walk.mp3",
	'school-bell2': 'school-bell2.mp3',
	'book': 'book.mp3',
	'noti': 'notification.mp3',
	'noti2': 'notificationv2.mp3',
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'entranceA': 'BG-01A.png',
	'entranceB': 'BG-01B.png',
	'entranceC': 'BG-01C.png',
	'entranceD': 'BG-01D.png',
	'hallwayA': 'BG-02A.png',
	'hallwayB': 'BG-02B.png',
	'classroomA': 'BG-03A.png',
	'classroomB': 'BG-03B.png',
	'classroomC': 'BG-03C.png',
	'classroomD': 'BG-03D.png',
	'desk': 'BG-04.png',
	'yardA': 'BG-05A.png',
	'yardB': 'BG-05B.png',
	'yardC': 'BG-05C.png',
	'catinA': 'BG-06A.png',
	'catinB': 'BG-06B.png',
	'libraryA': 'BG-07A.png',
	'libraryB': 'BG-07B.png',
	'officeA': 'BG-08A.png',
	'officeB': 'BG-08B.png',
	'stairwayA': 'BG-09A.png',
	'stairwayB': 'BG-09B.png',
	'medic': 'BG-10.png',
	'waitroom': 'BG-11.png'
});


// Define the Characters
monogatari.characters ({
	'bcl': {
		name: 'Bạn cùng lớp',
		color: '#2f9e44'
	},
	'bcl2': {
		name: 'Bạn cùng lớp',
		color: '#d94841',
	},
	'bcl3': {
		name: 'Bạn cùng lớp',
		color: '#4c6ef5',
	},
	'pl': {
		name: '{{player.name}}',
		color: '#1971c2',
		directory:'Khang',
		sprites: {
			bt: 'Bình thường.png',
			bn: 'Bất ngờ.png',
			ch: "Chào hỏi.png",
			kc: 'Khó chịu.png',
			ng: 'Nghi ngờ.png',
			nc: 'Nói chuyện.png',
			tm: 'Thắc mắc.png',
			tg: 'Tức giận.png',
			vv: 'Vui vẻ.png',
			sn: 'Suy nghĩ.png',
			
			btb: 'bag/Bình thường.png',
			bnb: "bag/Bất ngờ.png",
			tmb: 'bag/Thắc mắc.png',
			chb: 'bag/Chào hỏi.png',
			kcb: 'bag/Khó chịu.png',
			ngb: 'bag/Nghi ngờ.png',
			ncb: 'bag/Nói chuyện.png',
			tgb: 'bag/Tức giận.png',
			vvb: 'bag/Vui vẻ.png',
			snb: 'bag/Suy nghĩ.png',
			brb: 'bag/Bối rối.png',
			ctb: 'bag/Cười tươi.png',
			hhb: 'bag/Hoảng hốt.png',
			mmb: 'bag/Mạnh mẽ.png',
			qtamb: 'bag/Quyết tâm.png',
			ttinb: 'bag/Tự tin.png',
		},
	},
	'ma': {
		name: 'Mai Anh',
		color: '#e67700',
		directory:'MaiAnh',
		sprites: {
			bt: 'Bình thường.png',
			bn: "Bất ngờ.png",
			br: 'Bối rối.png',
			hl: 'Hối lỗi.png',
			ho: 'Hớn hở.png',
			ch: 'Hớn hở.png',
			kc: 'Khó chịu.png',
			ng: 'Nghi ngờ.png',
			nc1: 'Nói chuyện 1.png',
			nc2: 'Nói chuyện 2.png',
			tg: 'Khó chịu.png',
			vv: 'Vui vẻ.png',
			sn: 'Suy nghĩ.png',
			tm: 'Thắc măc.png',
			
			btb: 'bag/Bình thường.png',
			bnb: 'bag/Bất ngờ.png',
			brb: "bag/Bối rối.png",
			hlb: 'bag/Buồn.png',
			chb: 'bag/Hớn hở.png',
			kcb: 'bag/Khó chịu.png',
			ngb: 'bag/Nghi ngờ.png',
			nc1b: 'bag/Nói chuyện 1.png',
			nc2b: 'bag/Nói chuyện 2.png',
			tmb: 'bag/Thắc mắc.png',
			tgb: 'bag/Khó chịu.png',
			vvb: 'bag/Vui vẻ.png',
			snb: 'bag/Suy nghĩ.png',
			hob: 'bag/Hớn hở.png',
		}

	},
	'tl': {
		name: 'Trúc Linh',
		color: '#9c36b5',
		directory:'TrucLinh',
		sprites: {
			bt: 'Bình thường.png',
			bn: "Bất ngờ.png",
			dd: 'Dõng dạc.png',
			kl: 'Khóc lóc.png',
			br: 'Ngại ngùng.png',
			nc: 'Nói cười.png',
			qs: 'Quan sát.png',
			sn: "Suy nghĩ.png",
			tt: 'Tập trung.png',
			ng: 'Tự ti.png',
			tti: 'Tự ti.png',
			vt: 'Vẽ tranh.png',
			vv: 'Vui vẻ.png',

			btb: 'bag/Bình thường.png',
			bnb: 'bag/Đỏ mặt.png',
			ddb: 'bag/Nói.png',
			klb: 'bag/Buồn khóc.png',
			brb: 'bag/Ngại ngùng.png',
			ncb: 'bag/Nói cười.png',
			qsb: 'bag/Đứng nhìn.png',
			snb: 'bag/Chờ đợi.png',
			ttb: 'bag/Nói.png',
			ngb: 'bag/Thất vọng.png',
			ttib: 'bag/Buồn bã.png',
			vtb: 'bag/Vẽ tranh.png',
			vvb: 'bag/Vui vẻ.png',
		}
	},
	'qt': {
		name: 'Quang Tuấn',
		color: '#c92a2a',
		directory:'QuangTuan',
		sprites: {
			bt: 'Mệt mỏi.png',
			bn: "Bất ngờ.png",
			ch: 'Tự tin.png',
			kc: 'Mệt mỏi.png',
			ng: 'Trêu chọc.png',
			nc1: 'Nói chuyện 1.png',
			nc2: 'Nói chuyện 2.png',
			tg: 'Cáu gắt.png',
			vv: 'Vui vẻ.png',
			sn: 'Suy nghĩ.png',
			
			btb: 'bag/Bình thường.png',
			bnb: 'bag/Hoảng hốt.png',
			chb: 'bag/Tự tin.png',
			kcb: 'bag/Xin lỗi.png',
			ngb: 'bag/Trêu chọc.png',
			ncb: 'bag/Nói chuyện.png',
			tmb: 'bag/Nói chuyện.png',
			tgb: 'bag/Hoảng hốt.png',
			vvb: 'bag/Tự tin.png',
			snb: 'bag/Suy nghĩ.png',
			hlb: 'bag/Hối lỗi.png',
			tg2b: 'bag/Tức giận.png',
		}
	},
	'mh': {
		name: 'Mỹ Hạnh',
		color: '#0c8599',
		directory:'MyHanh',
		sprites: {
			bt: 'no_bag/Buồn.png',
			bn: 'no_bag/Bất ngờ.png',
			ch: 'no_bag/Chào hỏi.png',
			kc: 'no_bag/Dè chừng.png',
			ng: 'no_bag/Nghi ngờ.png',
			nc1: 'no_bag/Nói chuyện 1.png',
			tm: 'no_bag/Nói chuyện 2.png',
			tg: 'no_bag/Sững sờ.png',
			vv: 'no_bag/Tự tin.png',
			hl: 'no_bag/Hối lỗi.png',
			
			btb: 'have_bag/Buồn bã.png',
			bnb: 'have_bag/Bất ngờ.png',
			chb: 'have_bag/Chào hỏi.png',
			kcb: 'have_bag/Dè chừng.png',
			ngb: 'have_bag/Nghi ngờ.png',
			nc1b: 'have_bag/Nói chuyện 1.png',
			tmb: 'have_bag/Nói chuyện 2.png',
			nc3b: 'have_bag/Nói chuyện 3.png',
			tgb: 'have_bag/Tự tin.png',
			vvb: 'have_bag/Tự tin.png',
			hlb: 'have_bag/Hối lỗi.png',
			brb: 'have_bag/Ngại ngùng.png',
			sn2b: 'have_bag/Suy nghĩ.png',
		}
	},
	'ct': {
		name: 'Cô Thảo',
		color: '#2b8a3e',
		directory:'CoThao',
		sprites: {
			bt: 'Bình thường.png',
			dd: 'Dạy học 1.png',
			ch: "Chào hỏi.png",
			qs: 'Đứng nhìn.png',
			sn: 'Suy nghĩ.png',
			nc: 'Nói chuyện.png',
			gt: 'Giải thích 1.png',
			gt2: 'Giải thích 2.png',
			vv: 'Vui vẻ.png',
		}
	}
});
monogatari.script ({
	// The game starts here.
	'Start': [
		{
			'Input': {
				'Text': 'Tên của bạn là gì?',
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					monogatari.storage({
						player: {
							name: input.trim()
						}
					});
					return true;
				},
				'Warning': 'Bạn cần nhập tên!'
			}
		}, 
		'play sound bell',
		'centered 07:05 sáng.',
		'show scene entranceA with fadeIn',
		'play sound school with fade 2 loop',
		'"Sân trường vào đầu tuần. Học sinh từ nhiều hướng bước vào cổng. Những chiếc xe đạp lần lượt được dựng ngay ngắn trong khu vực để xe."',
		'"Tiếng bánh xe lăn trên sân. Tiếng gọi nhau í ới. Tiếng cười nói về những câu chuyện cuối tuần."',
		'"Những tiếng cười đùa ấy dần chuyển thành những bước chân háo hức đến lớp."',

		'play sound bike-fall',
		'show character pl btb at center with rotateInDownRight',
		'"..."',
		'pl Chết rồi sắp trễ học đến nơi rồi!',
		'hide character pl with fadeOutRightBig',

		'"{{player.name}} chạy vụt về phía dãy phòng học khối 8, xuyên qua dãy người đông đúc."',
		'show scene hallwayB with fadeIn',
		'"Thứ Hai luôn bắt đầu bằng rất nhiều âm thanh."',
		'"Tiếng bạn bè kể chuyện cuối tuần."',
		'"Tiếng bàn luận về bài kiểm tra sắp tới."',
		'"Tiếng gọi nhau từ cuối hành lang."',
		'"Mọi thứ dường như vẫn giống mọi ngày."',
		'"Nhưng từ hôm nay, lớp 8A sẽ đón thêm một thành viên mới."',

		'play sound heel-walk',
		'show scene classroomB with fadeIn',
		'"Tiếng bước chân vang vọng ngoài lớp học, học sinh dù có đang làm gì đều bỏ dở việc đang làm mà ngoan ngoãn quay về chỗ ngồi của họ."',
		'stop sound with fade 1',
		'show character ct bt at left with fadeIn',
		'ct Chào các em, trước khi bắt đầu tiết học, cô muốn giới thiệu với cả lớp một bạn mới chuyển đến trường chúng ta!',
		'show character tl br at center with fadeIn',
		'"Một cô bé bước vào lớp với mái tóc đen buộc thấp, chiếc ba lô màu xám trên vai và một cuốn sổ nhỏ được cô cẩn thận cầm trên tay."',
		'"Đứng trước cả lớp, cô bé nhẹ siết cuốn sổ tay, lấy hết dũng khí để giới thiệu."',
		'tl Chào c-các bạn. M-mình là Trúc Linh. Mong mọi người giúp đỡ mình!',
		'ct Từ nay về sau chúng ta là người một nhà sống hòa thuận với nhau nhé!',
		'hide character tl with fadeOut',
		'hide character ct with fadeOut',
		
		'play sound clap',
		'show character pl bt at center with fadeIn',
		'pl Bạn ấy có vẻ hơi hồi hộp.<br>-{{player.name}} nói với Mai Anh-',
		'hide character pl with fadeOut',
		'show character pl bt at right with slideInLeft',
		'show character ma bt at center with fadeIn',
		'ma Ừ... Nhưng mà nếu cậu chuyển đến một môi trường hoàn toàn mới thì cậu cũng hồi hộp như bạn ấy thôi.',

		'pl Cũng đúng...',
		'show scene classroomC with fadeIn',
		'show character ct nc at left with fadeIn end-fadeOut',
		'ct Lớp ơi hôm nay chúng ta sẽ làm hoạt động nhóm nhé!<br>Cô cần các bạn tự chọn ra nhóm của mình, mỗi nhóm gồm 3 thành viên và 1 nhóm trưởng.',
		'bcl {{player.name}}, Mai Anh, tớ bên này nè, vô chung cho vui!',
		'show character pl vv at center with fadeIn',
		'pl Tới liền!',
		'hide character pl with fadeOut',
		'show character qt nc1 at right with fadeIn',
		'qt Ê Hạnh, vào chung nhóm với tao.',
		'hide character qt with fadeOut',
		'show character mh ch at center with fadeIn',
		'mh Ok ông.',
		'hide character mh with fadeOut',
		'"Sau 5 phút náo loạn thì lớp bắt đầu trật tự lại, cô Thảo nhìn một vòng quanh lớp.<br>Cô chợt nhận thấy Linh đang đứng cô đơn lẻ loi một mình."',
		'show character ct sn at left with fadeIn',
		'ct Linh ơi con ra hỏi xem nhóm bạn nào còn thiếu người không nè!',
		'show character tl tti at right with fadeIn',
		'tl D-dạ.',
		'hide character tl with fadeOut',
		'show character tl tti at center with slideInRight',
		'hide character ct with fadeOut',
		'"Linh dè chừng bước tới nhóm của Tuấn và hỏi:"',
		'tl M-mình có thể vô nhóm các bạn được không?',
		'show character qt nc2 at right with fadeIn',
		'qt Nhóm tao đủ rồi, mày sang chỗ khác đi!',
		'"Linh buồn bã nhìn về phía nhóm của bạn cùng lớp, nhưng chẳng có ai lên tiếng."',
		'hide character qt with fadeOut',
		'show character mh tg at right with fadeIn',
		'mh Ừ đủ rồi cậu tìm chỗ khác đi',
		'tl Ừm... tớ sẽ tìm nhóm khác.',
		'hide character mh with fadeOut',
		'hide character tl with fadeOut',
		'show character tl tti at left with slideInRight',
		'"Linh lủi thủi trở về chỗ ngồi của cô ấy"',
		'hide character tl with fadeOut',
		'jump choice1',
	],
	'choice1': [{
		'Choice': {
			'Dialog': 'pl ...',
			'1': {
				'Text': 'Kệ dù sao cũng không phải việc của mình.',
				'onChosen':async function(){
					addempathy(-5);
					addawareness(-3);
					monogatari.storage().choice[1] = false;
				},
				'Do': 'jump không_liên_quan',
				'Condition':async function(){
					return monogatari.storage().choice[1]
				},
			},
			'2': {
				'Text': 'Mời Linh vào nhóm của mình.',
				'onChosen':async function(){
					addempathy(8);
					addawareness(5);
				},
				'Do': 'jump mời_linh',
			},
			'3': {
				'Text': 'Hỏi ý kiến Mai Anh cho chắc.',
				'onChosen':async function(){
					addempathy(3);
					addsafe(2);
				},
				'Do': 'jump hỏi_ý_kiến',
			},
			'4': {
				'Text': 'Chờ cô Thảo xử lý.',
				'onChosen':async function(){
					addsafe(2);
					addawareness(1);
				},
				'Do': 'jump chờ_giáo_viên',
			},
		}
	}],
	'không_liên_quan': [
		'show character ct vv at center with fadeIn',
		'pl Tiếp tục làm bài nào các bạn!',
		'hide character ct with fadeOut',
		'"Mọi chuyện vẫn tiếp tục"',
		'"Một lúc sau, cô Thảo đành sắp xếp cho Linh tham gia vào một nhóm khác."',
		'"Không có tiếng cãi vã."',
		'"Không ai làm gì rõ ràng là xấu."',
		'"Nhưng sâu trong thâm tâm, bạn có nghĩ đây có phải là hành động <span style="color: #f51f1f">nên làm?</span>"',
		'<h5>🔎Lựa chọn an toàn?</h5><br>Bạn đã chọn tiếp tục làm việc của mình thay vì lên tiếng<br>Có lẽ bạn chỉ đơn giản không muốn tự đưa mình vào những rắc rối không cần thiết.',
		'"Nhưng khi một người đang đứng một mình, sự im lặng ấy đôi khi cũng khiến họ cảm thấy mình bị bỏ lại phía sau."',
		{
			'Choice': {
				'Dialog': 'Bạn có muốn thử lại?',
				'1': {
					'Text': 'Có',
					'Do': 'jump choice1',
				},
				'2': {
					'Text': 'Không',
					'Do': 'end',
				},
			},
		}
	],
	'mời_linh': [
		'show character pl vv at left with fadeIn',
		'pl Linh ơi, nhóm tớ còn thiếu thành viên nè! Bạn tham gia với tụi mình nhé!',
		'bcl Đúng rồi, nhóm mình còn thiếu một người nữa, bạn có muốn tham gia không?',
		'show character tl br at right with fadeIn',
		'tl Được... chứ?',
		'pl Được! Cậu sang đây ngồi với chúng tớ đi!',
		'hide character tl with fadeOut',
		'show character tl br at center with slideInRight',
		'"Linh ngồi xuống trong sự bối rối, dường như cô ấy nghĩ rằng sẽ không ai cần một người ít nói như cô ấy tham gia nhóm của mình."',
		'ma Hihi, chào mừng cậu đến với nhóm của tụi mình!',
		'tl C-chào các bạn.',
		'<h5>🌱Một hành động nhỏ</h5><br>Bạn đã chọn bước về phía người đang đứng một mình.<br>Đôi khi, chỉ một câu nói đơn giản cũng đủ để khiến ai đó cảm thấy mình thuộc về nơi này.',
		'jump scene2',

	],
	'hỏi_ý_kiến': [
		'show character pl ng at left with fadeIn',
		'pl Mai Anh, cậu thấy sao? Tớ không biết có nên mời cậu ấy không nữa...',
		'show character ma br at center with fadeIn',
		'"Mai Anh nhìn theo ánh mắt bạn và nói:"',
		'hide character ma with fadeOut',
		'show character ma nc2 at center with fadeIn end-fadeOut',
		'ma Thôi để tớ!',
		'show character ma nc1 at center with fadeIn end-fadeOut',
		'ma Trúc Linh ơi! Nhóm tớ còn người này!',
		'show character tl br at right with fadeIn',
		'"Linh ngạc nhiên quay đầu lại nhìn."',
		'tl T-tớ c-có thể vô nhóm cậu ư?',
		'hide character ma with fadeOut',
		'show character ma vv at center with fadeIn',
		'ma Được chứ! Cậu vào ngồi với tụi mình đi.',
		'"Trúc Linh bối rối khẽ kéo ghế ngồi chung nhóm với Mai Anh."',
		'hide character pl',
		'hide character ma',
		'hide character tl',
		'<h5>💬Một bước còn thiếu?</h5><br>Bạn đã nhận ra Linh đang đứng một mình và muốn tìm cách giúp đỡ.<br>Nhưng có lẽ bạn sợ các thành viên khác không đồng ý?<br>Hay đến cả bạn cũng không biết tại sao mình lại chọn như vậy.',
		'May mắn thay, Mai Anh đã chủ động bước đến và mời Linh vào nhóm.<br>Nhưng liệu bạn có chắc rằng Mai Anh sẽ luôn đứng lên thay bạn...<br>Đôi khi, chúng ta chỉ cần thêm một chút tự tin để tự mình nói ra điều mà mình đã nghĩ.',
		'jump scene2',

	],
	'chờ_giáo_viên': [
		'show character ct sn at right with fadeIn end-fadeOut',
		'show character tl tti at center with fadeIn end-fadeOut',
		'pl ...',
		'ct Linh em vẫn chưa có nhóm hả?',
		'bcl Cô ơi nhóm em đang thiếu người nè cô!',
		'ct Vậy con sang nhóm đó nha Linh',
		'tl D-dạ...',
		'show character tl tti at left with slideInRight',
		'"Linh khẽ gật đầu rồi bước về phía nhóm bạn cùng lớp."',
		'"Cô Thảo tiếp tục quan sát cả lớp, còn mọi người cũng nhanh chóng quay lại với phần việc của mình."',
		'hide character tl with fadeOut',
		'hide character ct',
		'"Cuối cùng thì Linh cũng đã có một nhóm."',
		'"Mọi chuyện có vẻ đã được giải quyết ổn thỏa."', 
		'"Nhưng chẳng hiểu sao, {{player.name}} vẫn cảm thấy có gì đó <span style="color: #f52323">không ổn.</span>"',
		'<h5>🍀May mắn?</h5><br>May mắn vì cô Thảo nhận ra?<br>May mắn vì vẫn có bạn lên tiếng thay mình?<br>May mắn vì cuối cùng Linh cũng có một nhóm? Có một nhóm thì mọi chuyện đã thật sự ổn?',
		'jump scene2',
	],
	'scene2': [
		'show scene classroomD with fadeIn end-fadeOut',
		'play sound school-bell2',
		'show character ct gt2 at center with fadeIn end-fadeOut',
		'ct Lớp ơi, chúng ta kết thúc ở đây nhé!<br>Hẹn gặp lại các em vào tiết học sau nhé!',
		'stop sound with fade 1',
		'hide character ct',
		'show scene hallwayA with fadeIn end-fadeOut',
		'"Hành lang dần trở nên đông đúc, học sinh lớp 8A lần lượt rời khỏi lớp học, tiếng cười nói dần trở nên náo nhiệt."',
		'"{{player.name}} và Mai Anh đang cùng nhau đi về cầu thang thì bỗng nghe thấy giọng Tuấn vang vọng từ cầu thang lên:"',
		'show scene stairwayB with fadeIn end-fadeOut',
		'show character qt btb at left with fadeIn end-fadeOut',
		'qt Ê con kia! Bộ cuốn sổ đó đáng giá đến mức mày luôn phải cầm theo hả?',
		'show character tl brb at center with fadeIn end-fadeOut',
		'tl ...',
		'tl T-tớ thích vẽ...',
		'qt Mày đưa đây tao xem nào.',
		'show character tl ttib at center with fadeIn end-fadeOut',
		'"Linh do dự vài giây nhưng vẫn quyết định đưa cho Tuấn."',
		'play sound book',
		'show character qt vvb at left with fadeIn end-fadeOut',
		'qt Vãi! Mày cũng vẽ được đấy chứ.',
		'show character tl ttib at right with slideInLeft',
		'show character mh brb at center with fadeIn end-fadeOut',
		'"Mỹ Hạnh cũng bước tới và nhìn vào cuốn sổ tay của Linh. Sau vài giây, cô bé cười khẩy."',
		'mh Ủa Linh? Sao cậu toàn vẽ mấy thứ buồn không vậy?',
		'hide character tl with fadeOutLeftBig',
		'show character mh sn2b at center with fadeIn end-fadeOut',
		'show character qt tg2b at left with fadeIn end-fadeOut',
		'"Linh nhanh tay lấy lại cuốn sổ của mình. Cô ấy lặng lẽ ôm nó trước ngực và bước đi về phía cầu thang."',
		'"{{player.name}} và Mai Anh tình cờ đi ngang qua và nghe thấy những lời nói đó, cả hai đều cảm thấy có gì đó không ổn."',
		'tl ...',
		'jump choice2',
	],
	'choice2': [
		{
			'Choice': {
				'Dialog': 'ma Cậu thấy sao?',
				'1': {
					'Text': 'Chắc mọi người chỉ đùa thôi.',
					'Condition':async function(){
						return monogatari.storage().choice[2].a;
					},
					'onChosen':async function(){
						addempathy(-8);
						addawareness(-5);
						monogatari.storage().choice[2]=false;
					},
					'Do': 'jump joke',
				},
				'2': {
					'Text': 'Đến hỏi thăm Linh.',
					'onChosen':async function(){
						addawareness(5);
						addempathy(8);
					},
					'Do': 'jump asklinh',
				},
				'3': {
					'Text': 'Nhắc nhở Tuấn.',
					'onChosen':async function(){
						addawareness(8);
						addsafe(5);
					},
					'Do': 'jump telltuan',
				},
				'4': {
					'Text': 'Tiếp tục quan sát.',
					'onChosen':async function(){
						addawareness(5);
						addsafe(8);
					},
					'Do': 'jump observe',
				}
			},
		},
	],
	'joke':[
		'hide character mh',
		'show character qt vvb at right with slideInLeft end-fadeOut',
		'show character pl vvb at center with fadeIn end-fadeOut',
		'pl Haha, đúng là kỳ lạ thật đấy!',
		'show character ma ngb at left with fadeIn end-fadeOut',
		'ma Tớ thấy cậu ấy có vẻ không thoải mái với trò đùa này.',
		'pl Cơ mà sao cậu ấy chẳng nói gì cả. Chắc cậu ấy cũng biết là chúng ta chỉ đùa thôi mà.',
		'show character qt ngb at right with fadeIn end-fadeOut',
		'show character pl mmb at center with fadeIn end-fadeOut',
		'show character ma brb at left with fadeIn end-fadeOut',
		'"Mai Anh lặng lẽ nhìn Linh với vẻ mặt lo lắng, còn {{player.name}} thì vẫn tiếp tục cười theo Tuấn và Hạnh."',
		'<h5>❓Giỡn quá đà?</h5><br>Khi một người không thoải mái với một trò đùa, việc tiếp tục cười theo có thể khiến họ cảm thấy mình không được tôn trọng.<br>Cho dù câu nói đó chỉ đơn giản là đùa vui đều vẫn có thể tạo ra tác động không tích cực.',
		{
			'Choice': {
				'Dialog': 'Bạn có muốn thử lại?',
				'1': {
					'Text': 'Có',
					'Do': 'jump choice2',
				},
				'2': {
					'Text': 'Không',
					'Do': 'end',
				},
			},
		}
	],
	'asklinh':[
		'"{{player.name}} thấy vậy liền đi theo Linh. {{player.name}} cùng Mai Anh theo sau cô bé rời khỏi nơi đó."',
		'"Một lúc sau, cả ba cùng đi đến một góc khuất của hành lang, nơi có một chiếc ghế dài. Linh ngồi xuống, ôm chặt cuốn sổ tay trước ngực."',
		'"{{player.name}} và Mai Anh đến cạnh Linh."',
		'show character pl bt at left with fadeIn',
		'show character tl kl at center with fadeIn',
		'pl Chào Linh, tớ là {{player.name}}. Cậu có ổn không?',
		'tl ...',
		'ma Còn tớ là Mai Anh, cậu ổn chứ?',
		'tl ...',
		'tl T-tớ không sao.',
		'pl Linh, cậu có sao không? Nói bọn tớ nghe!',
		'tl Ừ... T-tớ ổn, m-mấy bức tranh này không phải thế đâu...',
		'ma Ừm, tớ hiểu mà. Chúng tớ chỉ muốn rủ chơi cùng với Linh.',
		'tl ...',
		'tl Ừm... T-tớ chỉ muốn vẽ thôi...',
		'ma Cậu có muốn đi chung với bọn tớ không?',
		'tl Đ-được chứ?',
		'pl Vậy chúng ta ra thư viện nhé?',
		'"Linh và cả nhóm sau đó cùng đi vào thư viện với nhau"',
		'<h5>🤝 Biết lắng nghe!</h5><br>Bạn đã chủ động kiểm tra cảm xúc của người đang có dấu hiệu không thoải mái.<br>Lắng nghe không nhất thiết phải ép họ kể hết mọi chuyện, mà chỉ đơn giản là cho họ biết rằng họ không cần phải đối mặt với mọi thứ một mình!',
		'jump scene2b',
	],
	'scene2b':[
		'show character tl sn at right with fadeIn',
		'"Trên đường đi mặc dù {{player.name}} và Mai Anh trò chuyện rôm rả, nhưng Linh vẫn trầm lặng chẳng nói câu nào, chỉ chăm chú ôm chặt cuốn sổ tay nhỏ..."',
		'pl ...<br>"Đúng là cô ấy vẽ giỏi thật, nhưng mà sao lại có bạn nói những bức tranh này kỳ lạ đến vậy?"',
		'"Nhóm bạn cuối cùng cũng đến thư viện"',
		{
			'Choice': {
				'Dialog': 'Giây phút bạn ngồi xuống thì bạn tình cờ nhìn thấy những bức tranh kỳ lạ ấy.',
				'1': {
					'Text': 'Nói chuyện với Mai.',
					'Condition':function(){
						return monogatari.storage().choice[2].b;
					},
					'onChosen':function(){
						addempathy(-4);
						addawareness(-5);
						monogatari.storage().choice[2].b=false;
					},
					'Do': 'jump discussmai',
				},
				'2': {
					'Text': 'Hỏi riêng Trúc Linh.',
					'onChosen':function(){
						addawareness(4);
						addempathy(2)
					},
					'Do': 'jump asklinh2b',
				},
				'3': {
					'Text': 'Nói chuyện với nhóm.',
					'onChosen':function(){
						addempathy(10);
						addawareness(12);
					},
					'Do': 'jump discussgrp',
				},
				'4': {
					'Text': 'Tiếp tục quan sát.',
					'onChosen':function(){
						addsafe(3);
						addempathy(-2);
					},
					'Do': 'jump observe2b',
				}
			}
		}
	],
	'discussmai':[
		'show character pl nc at left with fadeIn',
		'show character ma kc at right with fadeIn',
		'show character tl tti at center with fadeIn',
		'pl Này Mai Anh! Mai Anh!',
		'pl Cậu thấy những bức tranh đó chứ? Chúng thật kỳ quặc!',
		'ma Đúng đấy. Có vẻ như Trúc Linh có điều gì đó muốn tâm sự chăng?',
		'tl ...',
		'pl Nè Linh sao cậu im thế?',
		'ma Thôi nào!',
		'play sound school-bell2',
		'"Trúc Linh lặng lẽ đi về lớp một mình."',
		'ma Thấy chưa cậu làm Linh buồn rồi đó!!',
		'pl Ủa tớ đã nói gì sai đâu ta?',
		'ma Thôi vô tiết rồi kìa lo mà xin lỗi cậu ấy đi!',
		'"Hai người cùng tiến về phía lớp học, nhưng giờ đây cả hai đã không còn nói chuyện như xưa."',
		'<h5>💔 Gây tổn thương</h5><br>Bạn đã vô tình làm tổn thương Linh.<br>Có những sự thật không bao giờ được nói ra, nên việc bàn tán có thể vô tình làm người khác tổn thương.',
		{
			'Choice': {
				'Dialog': 'Bạn có muốn thử lại?',
				'1': {
					'Text': 'Có',
					'Do': 'jump scene2b',
				},
				'2': {
					'Text': 'Không',
					'Do': 'end',
				},
			},
		}
	],
	'asklinh2b':[
		'show character tl br at center with fadeIn',
		'"bạn khều nhẹ Linh."',
		'pl Này Linh! Tớ đang thắc mắc tại sao cậu lại vẽ những bức tranh kỳ cục này đấy. Bộ cậu không biết vẽ à?',
		'tl ...',
		'play sound school-bell2',
		'"Bạn cố hỏi thăm Linh cho đến khi"',
		'stop sound with fade 1',
		'"Linh lặng lẽ bước về lớp một mình..."',
		'ma Cậu đã nói gì với Linh vậy?',
		'pl Tớ chỉ hỏi cậu ấy về những bức tranh của Linh thôi.',
		'ma Tớ nghĩ Linh có những điều khó nói. Thôi chúng mình vào lớp kẻo trễ.',
		'<h5>🤐 Người thầm lặng</h5><br>Bạn đã quan tâm đến Linh nhưng cách thể hiện chưa khiến Linh có thể dũng cảm chia sẻ được...<br>Đôi khi chỉ cần cho họ biết rằng họ không phải ở một mình sẽ giúp họ có can đảm mở lòng nhiều hơn!',
		'jump scene3',
	],
	'discussgrp':[
		'show character pl nc at left with fadeIn',
		'show character ma bt at right with fadeIn',
		'show character tl kl at center with fadeIn',
		'pl Này, Linh! Cậu vẽ những bức tranh kỳ lạ thật đấy!',
		'ma Tớ cũng thắc mắc thật đó. Nếu cậu cần tâm sự thì bọn tớ sẽ luôn lắng nghe!',
		'tl ...',
		'tl Chúng... Từng là tất cả những kỷ niệm của tớ khi ở những trường cũ.',
		'pl Trường cũ? Chúng như thế nào vậy?',
		'"Khóe mắt Linh bỗng không kìm được mà nhẹ rơi những nhọt lệ."',
		'tl Chúng-C-chúng kinh khủng v-và xấu xí... Tớ s-sợ lắm...',
		'ma Hả, ai đã làm gì khiến cậu ra nông nỗi này vậy?',
		'tl C-các bạn ấy đã đánh tớ. Mấy bạn đó muốn tớ c-chết đi...',
		'tl T-tớ sợ lắm Mai Anh ơi...',
		'pl Không sao đã có bọn tớ ở đây rồi! Sẽ không có ai sẽ bắt nạt cậu đâu Linh!',
		'play sound school-bell2',
		'"..."',
		'"Trúc Linh vội lau nước mắt, nụ cười dần hiện trên đôi môi cô."',
		'ma Chúng mình mau vào lớp thôi. Đi cùng tụi mình nhé Trúc Linh.',
		'<h5>🥰 Tình yêu thương </h5><br>Bạn cùng Mai Anh đã giúp đỡ Linh tâm sự nỗi lòng của mình bằng sự chân thành.<br>Trong cuộc sống, sự chân thành và yêu thương là liều thuốc kỳ diệu giúp vượt qua khó khăn.<br>',
		'jump scene3',
	],
	'observe2b':[
		'show character ma bt at left with fadeIn',
		'show character tl tti at right with fadeIn',
		'"{{player.name}} nhìn Linh với vẻ mặt hoài nghi cho dù vậy Linh vẫn im lặng không nói nửa lời."',
		'play school-bell2',
		'ma Nào, hai người, đừng nhìn nhau nữa. Chúng ta cùng về lớp nào.',
		'tl ...',
		'<h5>🔇 Im lặng</h5><br>Mặc dù bạn đã nhận ra điểm bất thường từ Linh nhưng vẫn chọn tiếp tục quan sát.<br>Sự im lặng kéo dài sẽ khiến bất kỳ người nào kể cả bạn thân của bạn cũng sẽ cảm thấy khó chịu<br>Thay vào đó ta có thể  bắt đầu cuộc trò chuyện bằng một vài thứ gần gũi.',
		'jump scene3',
	],
	'telltuan':[
		'show character pl nc at center with fadeIn',
		'show character qt tg at right with fadeIn',
		'pl Nào, hai người, tha cho Linh đi. Mấy cậu không thấy cậu ấy đang không thích à?',
		'qt Ý! thằng bạn trai nhỏ mày đến rồi kia, mà có gì to tát đâu. Bọn tao chỉ đùa chút thôi mà {{player.name}}!',
		'pl Mấy cậu có thể thấy điều đó vui. Nhưng nó không có nghĩa là Linh sẽ thấy vui!',
		'qt Kệ, dù sao chọc con này cũng chẳng có gì vui. Thôi, bọn tao về trước đây, {{player.name}}!',
		'"Tiếng cười đùa của Tuấn và Hạnh khuất dần theo tiếng bước chân của họ."',
		'<h5>💡 Nhận diện tốt!</h5><br>Việc nhận biết tác động của hành vi/ lời nói... đối với người xung quanh là chìa khóa dẫn đến một tình bạn đẹp!<br>Một lời nói/ hành vi có thể không có ý làm tổn thương người khác, nhưng chúng ta phải biết dừng lại khi nó khiến người khác không thoải mái.',
		'jump scene3',
	],
	'observe':[
		'show character pl sn at left with fadeIn',
		'show character tl tti at right with fadeIn',
		'pl ...',
		'pl "Linh liên tục nhìn xuống cuốn sổ"<br>"Cậu ấy ôm nó sát vào người"<br>"Mọi chuyện không đơn giản đến thế!"',
		'"Linh nhanh chóng rời khỏi hành lang."',
		'<h5>👁️ Bạn đã nhận ra dấu hiệu!</h5><br>Quan sát là bước đầu tiên trong giải quyết vấn đề.<br>Nhưng việc nhận ra vấn đề và xử lý vấn đề là hai điều hoàn toàn khác nhau!<br>Bạn nên làm gì tiếp theo để vừa đảm bảo an toàn cho bạn và mọi người, vừa có thể giúp Linh?',
		'jump scene3',
	],
	'scene3':[
		'show scene desk with fadeIn',
		'show character pl sn at left with fadeIn',
		'show character ma bt at right with fadeIn',
		'play sound noti',
		'pl "Group lớp à?"',
		'bcl2 |Có ai thấy tranh của Linh hôm nay không?|',
		'|Một bức ảnh chụp những trang trong cuốn sổ xuất hiện.|',
		'bcl3 |Cái hình gì đây?|',
		'"Bắt đầu càng nhiều người bình luận sôi nổi hơn."',
		'"Bạn nhìn danh sách thành viên và không có linh ở nhóm lớp."',
		'play sound noti2',
		'ma |Cậu thấy tin nhắn trong nhóm lớp chưa?|',
		{
			'Choice': {
				'Dialog': '"Ở trên mạng, một nội dung có thể được chia sẻ nhanh hơn rất nhiều"',
				'1': {
					'Text': 'Chia sẻ cho bạn mình',
					'onChosen':function(){
						addawareness(-3);
						addempathy(4);
						addsafe(-5);
					},
					'Do': 'jump share',
				},
				'2': {
					'Text': 'Bình luận về bức ảnh',
					'onChosen':function(){
						addawareness(-5);
						addempathy(-7);
						addsafe(-8);
					},
					'Do': 'jump comment',
				},
				'3': {
					'Text': 'Hỏi Linh thử',
					'onChosen':function(){
						addawareness(8);
						addempathy(5);
						addsafe(3);
					},
					'Do': 'jump asklinh3',
				},
				'4': {
					'Text': 'Méc cô.',
					'onChosen':function(){
						addawareness(8);
						addsafe(10);
					},
					'Do': 'jump tellct',
				}
			}
		},
	],
	'share':[
		'pl Tớ thấy rồi, khá là thú vị, để tớ chia sẻ cho mấy đứa cốt của tớ!',
		'ma Ê tuyệt đối không được! Cậu nghĩ sao lại có thể lan truyền những tin tức này?',
		'play sound noti',
		'play sound noti',
		{
			'choice': {
				'Dialog': 'Màn hình điện thoại của bạn hiện lên những tin nhắn từ nhóm bạn thân của bạn.',
				'1': {
					'Text': 'Nghe lời Mai Anh',
					'onChosen':function(){
						addempathy(-4);
						addawareness(-3);
						addsafe(-5);
					},
					'Do': 'jump delete',
				},
				'2': {
					'Text': 'Nghe lời bạn thân',
					'Condition': function(){
						return monogatari.storage().choice[3];
					},
					'onChosen':function(){
						addempathy(-10);
						addawareness(-5);
						addsafe(-12);
						monogatari.storage().choice[3]=false;
					},
					'Do': 'jump friends',
				}
			}
		}
	],
	'delete':[
		'pl Thôi được rồi, tớ sẽ xóa tin nhắn này đi.',
		'"Bạn xóa tin nhắn và gục đầu xuống bàn ngủ"',
		'Ma |Linh ơi cậu đi ăn trưa với tụi tớ nhé?|',
		'play sound noti2',
		'tl |Tớ bận việc rồi! Tí tớ ăn sau!|',
		'<h5>🗑️ Xóa tin nhắn</h5><br>Bạn đã chọn lan truyền hình ảnh đi<br>Dù cho bạn có thu hồi thì danh tiếng Trúc Linh cũng đã bị ảnh hưởng ít nhiều!',
		'jump scene4',
	],
	'friends':[
		'pl Có sao đâu, ai cũng muốn xem những bức tranh này mà!',
		'"bạn chia sẻ cho các nhóm bạn thân của mình."',
		'play sound noti',
		'play sound noti',
		'play sound noti',
		'"Một nội dung ban đầu chỉ được chia sẻ trong một nhóm nhỏ, nhưng giờ đây nó đã được lan truyền rộng rãi..."',
		'<h5>⚠️ BAD ENDING</h5><br>Nội dung trên mạng có thể được chia sẻ rất nhanh.<br>Việc tiếp tục lan truyền hoặc cổ vũ những nội dung khiến một người cảm thấy bị tổn thương có thể làm tình huống trở nên nghiêm trọng hơn.',
		{
			'Choice': {
				'Dialog': 'Bạn có muốn thử lại?',
				'1': {
					'Text': 'Có',
					'Do': 'jump scene3',
				},
				'2': {
					'Text': 'Không',
					'Do': 'end',
				},
			},
		}
	],
	'comment':[
		'pl Tớ thấy rồi, khá là thú vị, để tớ bình luận về bức ảnh này!',
		'ma Ê tuyệt đối không được! Cậu nghĩ sao lại có thể bình luận về những tin tức này?',
		'play sound noti',
		'play sound noti',
		'pl Có sao đâu ai cũng bình luận cả mà!',
		'"Bạn bình luận về anh. Một nội dung ban đầu chỉ xuất hiện trong một nhóm nhỏ bắt đầu được nhiều người biết đến."',
		'pl |Haha, bức tranh này thật là kỳ quặc!|',
		'pl Cậu đi ăn chứ',
		'ma Tớ bận việc rồi! Tí tớ ăn sau!',
		'"Khang đi đến căn tin của trường để Mai Anh ở lại một mình."',
		'<h5>⚠️ Bình luận ác ý</h5><br>Nội dung trên mạng có thể được chia sẻ rất nhanh.<br>Việc tiếp tục lan truyền hoặc cổ vũ những nội dung khiến một người cảm thấy bị tổn thương có thể làm tình huống trở nên nghiêm trọng hơn.',
		'jump scene4',
	],
	'asklinh3':[
		'pl Này Linh! Cậu có biết mọi người đang chia sẻ ảnh tranh của cậu không?',
		'tl Mình biết...',
		'pl ...Cậu có muốn mình giúp gì không?',
		'tl ...',
		'tl Mình… không biết phải làm sao. T-tớ chỉ muốn vẽ thôi...',
		"{player.name} Nhìn sang Mai Anh.",
		"Mai Anh gật đầu.",
		'<h5>🤝 Bạn đã lựa chọn hỗ trợ</h5><br>Bạn đã chủ động kiểm tra cảm xúc của người đang có dấu hiệu không thoải mái.<br>Lắng nghe không nhất thiết phải ép họ kể hết mọi chuyện, mà chỉ đơn giản là cho họ biết rằng họ không cần phải đối mặt với mọi thứ một mình!',
		'pl Linh hãy cùng chúng mình đi tìm kiếm sự giúp đỡ."',
		'ma Nhưng chúng ta phải hỏi ai mới được?',
		'tl Tớ nghĩ… hay là mình bỏ đi… có được không?',
		'ma Tớ nghĩ chúng ta nên nói chuyện lại với các bạn. Nếu vẫn còn tiếp tục, chúng mình sẽ tìm sự hỗ trợ của cô giáo.',
		{
			'Choice': {
				'Dialog': 'Trong suy nghĩ của bạn lúc này rất phân vân, cậu muốn báo cáo lại với giáo viên về việc này ngay lập tức nhưng chưa biết phải làm như thế nào?',
				'1': {
					'Text': 'Nghe theo Trúc Linh.',
					'onChosen':function(){
						addawareness(-5);
						addempathy(3);
						addsafe(8);
					},
					'Do': 'jump asklinh4',
				},
				'2': {
					'Text': 'Nghe theo Mai Anh.',
					'onChosen':function(){
						addawareness(4);
						addempathy(10);
						addsafe(-4);
					},
					'Do': 'jump gomanh',
				},
				'3': {
					'Text': 'Nghe theo bản thân.',
					'onChosen':function(){
						addawareness(14);
						addempathy(8);
						addsafe(3);
					},
					'Do': 'jump self',
				},
				'4': {
					'Text': 'Tiếp tục quan sát.',
					'onChosen':function(){
						addawareness(-3);
						addempathy(-5);
						addsafe(-2);
					},
					'Do': 'jump observe3',
				},
			}
		}
	],
	'asklinh4':[
		'pl Tớ thấy sẽ tốt hơn hết là để mọi chuyện đi theo tự nhiên. Đừng nên can thiệp quá nhiều vào vụ này vì rất có thể chúng mình sẽ bị bắt nạt!',
		'ma Tuyệt đối không được nhân nhượng! Cậu nghĩ sao lại để cho các bạn ấy lan truyền những tin tức này?',
		'tl Ừm… cứ để như vậy… Làm phiền các bạn nhiều rồi…',
		'"Cuối cùng, nhờ Mai Anh đã giúp cho Trúc Linh giải thích được sự việc."',
		'<h5>Bạn đã lựa chọn không hành động</5><br>Đôi khi, việc không hành động sẽ khiến cho người khác cảm thấy bị bỏ rơi.<br>Hãy thử tưởng tượng nếu bạn là Trúc Linh, bạn sẽ cảm thấy thế nào nếu những người bạn của mình không đứng lên bảo vệ mình?',
		'jump scene4',
	],
	'gomanh':[
		'pl Tớ thấy Mai Anh nói đúng! Chúng ta nên nói chuyện lại với các bạn.',
		'tl Không… được.',
		'pl Cậu hãy yên tâm. Tớ và Mai Anh sẽ giúp cậu!',
		'tl Cảm ơn các bạn…',
		'"Ngay lập tức, Mai Anh và Khang liền lên nhóm chat của lớp tường thuật lại mọi sự việc và yêu cầu các bạn ngừng ngay lập tức các hoạt động xấu của mình."',
		'"Các bạn trong lớp đã nhận thức được sự việc, các thông tin về Trúc Linh đã được thu hồi và ngăn chặn. Sau đó, Khang nhắn với Trúc Linh."',
		'pl Cậu ổn chứ? Tớ và Mai Anh đã giúp cậu thu hồi những bức tranh đó rồi.',
		'tl Cảm ơn các bạn rất nhiều! Tớ… tớ không biết phải nói gì nữa…',
		'ma Không có gì đâu! Chúng tớ sẽ luôn ở bên cậu mà!',
		'<h5>🤝 Bạn đã lựa chọn hỗ trợ</h5><br>Bạn đã chủ động kiểm tra cảm xúc của người đang có dấu hiệu không thoải mái.<br>Lắng nghe không nhất thiết phải ép họ kể hết mọi chuyện, mà chỉ đơn giản là cho họ biết rằng họ không cần phải đối mặt với mọi thứ một mình!',
		'jump scene4',
	],
	'self':[
		'pl Tớ nghĩ tốt hơn hết là hãy báo với giáo viên chủ nhiệm!',
		'tl Không… được.',
		'pl Cậu hãy yên tâm. Tớ và Mai Anh sẽ giúp cậu!',
		'tl Cảm ơn các bạn…',
		'"Sau đó, Mai Anh và Khang tường thuật lại với cô Thảo về sự việc của Trúc Linh trên nhóm chat của lớp."',
		'"Cô Thảo vào nhóm chat, báo cáo vấn đề của lớp và khiển trách lớp vụ việc lần này."',
		'ct Các em không được phép bôi nhọ danh dự người khác! Hành động của các em là vi phạm pháp luật và bị nghiêm cấm! Lập tức xóa hết các nội dung về vụ việc lần này nếu không cô sẽ báo lại với nhà trường!',
		'"Mai Anh nhìn Khang rất hài lòng và vui vẻ. Cuối cùng, mọi chuyện đã được giải quyết hoàn toàn."',
		'<h5>🛡️ Bạn đã tìm kiếm sự giúp đỡ</h5><br>Việc lựa chọn hành động để ngăn chặn sự việc tiếp tục lan truyền hoặc cổ xúy đã giúp Trúc Linh an toàn.<br>Tìm kiếm sự giúp đỡ của người lớn đáng tin cậy là cách hiệu quả giúp ngăn chặn các sự việc xấu. Bạn đã nhận thức rất tốt và đưa ra quyết định đúng đắn.',
		'jump scene4',
	],
	'observe3':[
		'tl Vậy thôi nhé… Chào các cậu.',
		'"Mai Anh liền tỏ vẻ phản đối."',
		'ma Tuyệt đối không được nhân nhượng! Cậu nghĩ sao lại để cho các bạn ấy lan truyền những tin tức này?',
		'pl Không sao đâu! Chào cậu.',
		'"Linh nhanh chóng rời khỏi hành lang."',
		'"Mai Anh rất không thích hành động của Khang và ngay lập tức lấy điện thoại của mình để nói chuyện về Trúc Linh."',
		'"Cuối cùng, nhờ Mai Anh đã giúp cho Trúc Linh giải thích được sự việc."',
		'<h5>👁️ Bạn đã lựa chọn không hành động</h5><br>Việc lựa chọn không hành động để cho sự việc tiếp tục lan truyền hoặc cổ xúy sẽ gây ra hậu quả rất khôn lường.<br>Bạn nên khai báo sự việc cho những người đáng tin cậy để tìm kiếm sự trợ giúp kịp thời.',
		'jump scene4',
	],
	'tellct':[
		'pl Tớ nghĩ tốt hơn hết là hãy báo với giáo viên chủ nhiệm!',
		'"Bạn và Mai Anh liền tường thuật lại với cô Thảo về sự việc của Trúc Linh trên nhóm chat của lớp."',
		'"Cô thảo báo phụ huynh của các em và khiển trách lớp vụ việc lần này."',
		'ct Các em không được phép bôi nhọ danh dự người khác! Hành động của các em là vi phạm pháp luật và bị nghiêm cấm! Lập tức xóa hết các nội dung về vụ việc lần này nếu không cô sẽ báo lại với nhà trường!',
		'"Mai Anh nhìn Khang rất hài lòng và vui vẻ. Cuối cùng, mọi chuyện đã được giải quyết hoàn toàn."',
		'<h5>🛡️ Biết tìm kiếm sự hỗ trợ</h5><br>Việc lựa chọn tìm kiếm sự hỗ trợ từ người lớn đáng tin cậy là cách hiệu quả để ngăn chặn các sự việc xấu.<br>Bạn đã thể hiện sự thông minh và trách nhiệm trong việc xử lý tình huống.',
		'jump scene4',
	],
	'scene4':[
		'centered Sáng hôm sau, tại 7:10.',
		'centered {{player.name}} bước vào lớp với tâm trạng thư thỏa.',
		'centered Ánh nắng buổi sáng chiếu qua cửa sổ.',
		'centered Cậu nhìn về phía chỗ ngồi hôm qua Linh từng ngồi một mình.',
		'centered Nhưng hôm nay, Linh đang ngồi cùng Mai Anh.',
		'centered Bạn nhìn thấy bức tranh Linh đang vẽ.',
		'show scene desk with fadeIn',
		'pl WOW, Cậu vẽ đẹp thật đấy!',
		'tl Hôm nay mình muốn vẽ một lớp học mà ai cũng có chỗ.',
		'ma Có khi một chiếc ghế trống không chỉ là một chiếc ghế.',
		'centered Có những điều rất dễ bị bỏ qua.',
		'centered Một bạn ngồi một mình.',
		'centered Một bạn ngồi một mình.',
		'centered Một câu nói được gọi là “chỉ đùa thôi”.',
		'centered Một bức ảnh được chia sẻ mà chưa ai hỏi người trong ảnh có đồng ý hay không.',
		'centered Những điều ấy có thể rất nhỏ nhưng cách chúng ta phản ứng với chúng có thể tạo nên một khác biệt rất lớn.',
		'hide scene desk with fadeOut',
		'centered Theo bạn, điều quan trọng nhất trong Chapter này là gì?',
		{
			'Choice': {
				'Dialog': 'Hãy chọn một trong những điều quan trọng nhất mà bạn học được từ Chapter này.',
				'1': {
					'Text': 'Không trêu chọc bạn bè vì đó là một hành động xấu.',
					'onChosen':function(){
						addawareness(2);
						addsafe(7);
					},
					'Do': 'jump end',
				},
				'2': {
					'Text': 'Khi phát hiện một người bị cô lập, cần chú ý đến cảm xúc của họ và tìm cách hỗ trợ phù hợp.',
					'onChosen':function(){
						addempathy(5);
						addawareness(3);
					},
					'Do': 'jump end',
				},
				'3': {
					'Text': 'Mọi vấn đề đều phải báo ngay cho giáo viên để được giải quyết kịp thời.',
					'onChosen':function(){
						addawareness(3);
						addsafe(4);
					},
					'Do': 'jump end',
				},
				'4': {
					'Text': 'Người chứng kiến không nên can thiệp vì rất có thể sẽ bị thù ghét.',
					'onChosen':function(){
						addsafe(7);
					},
					'Do': 'jump end',
				}
			}
		}
	],
	
});
