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
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'school_yard': 'school_yard.png',
	'classroom': "classroom.png",
	'cr2': 'classroom2.png',
});


// Define the Characters
monogatari.characters ({
	'bcl': {
		name: 'Các bạn cùng lớp',
	},
	'pl': {
		name: '{{player.name}}',
		color: '#5bcaff',
		sprites: {
			normal: 'pl.jpg',
		},
	},
	'ma': {
		name: 'Mai Anh',

	},
	'tl': {
		name: 'Trúc Linh',

	},
	'qt': {
		name: 'Quan Tuấn',

	},
	'mh': {
		name: 'Mỹ Hạnh',

	},
	'ct': {
		name: 'Cô Thảo',
		
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
				'Warning': 'Bạn cần nhập tên'
			}
		}, 
		'play sound bell',
		'7:05 sáng',
		'show scene school_yard with fadeIn',
		'play sound school with fade 2 loop',
		'"Sân trường vào đầu tuần. Học sinh từ nhiều hướng bước vào cổng. Những chiếc xe đạp lần lượt được dựng ngay ngắn trong khu vực để xe."',
		'"Tiếng bánh xe lăn trên sân. Tiếng gọi nhau í ới. Tiếng cười nói về những câu chuyện cuối tuần."',
		'"Những tiếng cười đùa ấy dần chuyển thành những bước chân háo hức đến lớp."',

		'play sound bike-fall',
		'show character pl normal at center with rotateInDownRight',
		'"..."',
		'pl Chết rồi sắp trễ học đến nơi rồi!!',
		'hide character pl with fadeOutRightBig',
		'"{{player.name}} chạy vụt về phía dãy phòng học khối 8, xuyên qua dãy người đông đúc..."',
		'"Thứ Hai luôn bắt đầu bằng rất nhiều âm thanh"',
		'"Tiếng bạn bè kể chuyện cuối tuần"',
		'"Tiếng bàn luận về bài kiểm tra sắp tới"',
		'"Tiếng gọi nhau từ cuối hành lang"',
		'"Mọi thứ dường như vẫn giống mọi ngày"',
		'"Nhưng từ hôm nay, lớp 8A sẽ đón thêm một thành viên mới..."',

		'play sound heel-walk',
		'show scene classroom with fadeIn',
		'"Tiếng bước chân vang vọng ngoài lớp học, học sinh dù có đang làm gì đều bỏ dở việc đang làm mà ngoan ngoãn quay về chỗ ngồi của họ."',
		'stop sound with fade 1',
		'ct Chào các em, trước khi bắt đầu tiết học, cô muốn giới thiệu với cả lớp một bạn mới chuyển đến trường chúng ta!.',
		'"Một cô bé bước vào lớp với mái tóc đen buộc thấp, chiếc ba lô màu xám trên vai và một cuốn sổ nhỏ được cô cẩn thận cầm trên tay."',
		'"Đứng trước cả lớp, cô gái ấy nhẹ xiết cuốn sổ tay, lấy hết dũng khí để giới thiệu"',
		'tl Chào c-các bạn. M-mình là Trúc Linh. Mong mọi người giúp đỡ mình!',
		'ct Từ nay về sau chúng ta là người một nhà sống hòa thuận với nhau nhé!',
		'play sound clap with fade 2',

		'pl bạn ấy có vẻ hơi hồi hộp.<br>-{{player.name}} nói với Minh Anh-',
		'ma Ùm... Nhưng mà nếu cậu chuyển đến một môi trường hoàn toàn mới thì cậu cũng hồi hộp như bạn ấy thôi.',
		'pl Ừ, cũng đúng...',
		'show scene cr2 with fadeIn',
		'ct Lớp ơi hôm nay chúng ta sẽ làm bài hoạt đống nhóm nhé<br>Cô cần các bạn tự chọn ra nhóm của mình, mỗi nhóm gồm 3 thành viên và 1 nhóm trưởng nhé!',
		'bcl {{player.name}}, Mai Anh, mình bên này nè, vô chung cho vui!',
		'pl Tới liền!',
		'qt Hạnh ơi tạo nhóm tao.',
		'mh Ok ông.',
		'"Sau 5 phút náo loạn thì lớp bắt đầu trật tự lại, cô Thảo nhìn một vòng quanh lớp...<br>Cô chợt nhận thấy Linh đang đứng cô đơn lẻ loi môt mình."',
		'ct Linh ơi con ra hỏi xem nhóm bạn nào còn thiếu người không nè!',
		'tl D-dạ.',
		'"Linh dè chừng bước tới nhóm nhóm của Tuấn và hỏi:"',
		'tl M-mình có thể vô nhóm các bạn được không?',
		'qt Nhóm tao đủ rồi, mày sang chỗ khác đi!',
		'mh Ừm đủ rồi cậu tìm chỗ khác đi',
		'"Linh lũi thủi trở về chỗ ngồi của cô ấy"',
		'jump choice1',
	],
	'choice1': [{
		'Choice': {
			'Dialog': 'pl ...{{stats.empathy}}{{choice.1}}',
			'1': {
				'Text': 'Kệ dù sao cũng không phải việc của mình.',
				'Do': 'jump không_liên_quan',
				'Condition': function(){
					return monogatari.storage().choice[1]
				},
			},
			'2': {
				'Text': 'Mời Linh vào nhóm của mình nhỉ.',
				'onChosen':function(){
					addempathy(8);
					addawareness(5);
				},
				'Do': 'jump mời_linh',
			},
			'3': {
				'Text': 'Hỏi ý kiến Mai Anh cho chắc.',
				'onChosen':function(){
					addempathy(3);
					addsafe(2);
				},
				'Do': 'jump hỏi_ý_kiến',
			},
			'4': {
				'Text': 'Thôi chờ cô Thảo xử lý.',
				'onChosen':function(){
					addsafe(2);
					addawareness(1);
				},
				'Do': 'jump chờ_giáo_viên',
			},
		}
	}],
	'không_liên_quan': [
		'pl Tiếp tục làm bài nào nhóm ơi!',
		'"Mọi chuyện vẫn tiếp tục"',
		'"Một lúc sau, cô Thảo đành sắp xếp cho Linh tham gia vào một nhóm khác..."',
		'"không có tiếng cải cã"',
		'"Không ai làm gì rõ ràng là xấu"',
		'"Nhưng sâu trong thâm tâm bạn, bạn có nghĩ đây là có phải là hành động <span style="color: #f51f1f">nên làm?</span>"',
		'<h5>🔎Lựa chọn an toàn?</h5><br>Bạn đã chọn tiếp tục làm việc của mình thay vì lên tiếng<br>Có lẽ bạn chỉ đơn giản không muốn tự đưa mình vào những rắc rối không cần thiết...',
		'"Nhưng khi một người đang đứng một mình, sự im lặng ấy đôi khi cũng khiến họ cảm thấy mình bị bỏ lại phía sau..."',
		{
			'Choice': {
				'Dialog': 'Bạn có muốn thử lại?',
				'1': {
					'Text': 'Có',
					'onChosen':function(){
						addempathy(-5);
						addawareness(-3);
						monogatari.storage().choice[1] = false;
					},
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
		'pl Linh ơi, nhóm mình còn thiếu thành viên nè, bạn tham gia với tụi mình nhé!',
		'bcl đung rồi, nhóm mình còn thiếu một người nữa, bạn có muốn tham gia không?',
		'tl T-thật hả!?',
		'pl Ừm, cậu sang đây ngồi với chúng tớ đi!',
		'"Linh ngồi xuống trong sự bối rối, dường như cô ấy nghĩ rằng sẽ không một ai cần một người ít nói như cô ấy tham gia nhóm của mình..."',
		'ma Hihi, chào mừng cậu đến với nhóm của tụi mình!',
		'<h5>🌱Một hành động nhỏ</h5><br>Bạn đã chọn bước một bước về phía người đang đứng một mình.<br>Đôi khi, chỉ một câu nói đơn giản cũng đủ để khiến ai đó cảm thấy mình thuộc về nơi này.',
		'jump scene2',

	],
	'hỏi_ý_kiến': [
		'pl Mai Anh, cậu thấy sao? Không biết có nên mời cậu ấy không nữa...',
		'"Mai Anh nhìn theo ánh mắt bạn và nói:"',
		'ma Thôi để tớ.',
		'ma Trúc Linh ơi! Nhóm tớ còn người này!',
		'"Linh ngạc nhiên quay đầu lại nhìn"',
		'tl T-tớ c-có thể vô nhóm cậu ư?',
		'Được, cậu vào ngồi với tụi mình đi.',
		'"Trúc Linh bối rối khẻ kéo ghế ngồi chung nhóm với Mai Anh."',
		'<h5>💬Một bước còn thiếu?</h5><br>Bạn đã nhận ra Linh đang đứng một mình và muốn tìm cách giúp đỡ.<br>Nhưng có lẽ vì bạn sợ các thành viên khác không đồng ý?.<br>Hay đến cả bạn còn không biết tại sao bạn chọn...',
		'May mắn thay, Mai Anh đã chủ động bước đến và mời Linh vào nhóm.<br>Nhưng liệu bạn có chắc rằng Mai Anh sẽ luôn đứng lên thay bạn...<br>Đôi khi, chúng ta chỉ cần thêm một chút tự tin để tự mình nói ra điều mà mình đã nghĩ...',
		'jump scene2',

	],
	'chờ_giáo_viên': [
		'pl ...',
		'ct Ôi Linh, em vẫn chưa có nhóm hả?',
		'bcl Cô ơi cho nhóm em cũng thiếu người nè cô!',
		'ct Vậy con sang nhóm đó nha Linh',
		'tl D-dạ...',
		'"Linh khẽ gật đầu rồi bước về phía nhóm bạn cùng lớp."',
		'"Cô Thảo tiếp tục quan sát cả lớp, còn mọi người cũng nhanh chóng quay lại với phần việc của mình."',
		'"Cuối cùng thì Linh cũng đã có một nhóm."',
		'"Mọi chuyện có vẻ đã được giải quyết ổn thỏa..."', 
		'"Nhưng chẳng hiểu sao, {{player.name}} vẫn cảm thấy có gì đó <span style="color: #f52323">không ổn.</span>"',
		'<h5>🍀May mắn?</h5><br>May mắn vì cô Thảo nhận ra?<br>May mắn vì vẫn có bạn lên tiếng thay mình?<br>May mắn vì cuối cùng Linh cũng có một nhóm là mọi chuyện đã thật sự ổn?',
		'jump scene2',
	],
	'scene2': [
		'end',
	],
});