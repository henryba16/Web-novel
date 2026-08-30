/* global monogatari */

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
	'cr2': 'classroom2.png'
});


// Define the Characters
monogatari.characters ({
	'bcls': {
		name: 'Bạn cùng lớp',
	},
	'pl': {
		name: 'Bạn',
		color: '#5bcaff'
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
		'7:05 sáng',
		'show scene school_yard with fadeIn',
		'"Sân trường đông đúc học sinh"',
		'"Tiếng xe đạp, tiếng nói chuyện và tiếng chuông báo vào lớp hòa lẫn với nhau"',
		'"<span style="color: #5bcaff">Bạn</span> dựng xe rồi chạy về phía lớp 8A"',
		'"Thứ Hai luôn có một cảm giác rất đặc biệt. Mọi người nói chuyện về cuối tuần. Một vài nhóm bạn đã bắt đầu bàn về bài kiểm tra sắp tới. Nhưng hôm nay, lớp 8A có thêm một người"',
		'show scene classroom with fadeIn',
		'ct Chào các em, trước khi bắt đầu tiết học, cô muốn giới thiệu với cả lớp một bạn mới.',
		'"Một cô bé bước lên phía trước với mái tóc đen buộc thấp, chiếc ba lô màu xám trên vai và một cuốn sổ nhỏ được cô cẩn thận cầm trên tay"',
		'tl Chào c-các bạn. M-mình là Trúc Linh. Mong mọi người giúp đỡ mình',
		'pl bạn ấy có vẻ hơi hồi hộp.<br>-{{player.name}} nói với Minh Anh-',
		'ma Nếu cậu chuyển đến một môi trường hoàn toàn mới thì cậu cũng hồi hộp như bạn ấy thôi.',
		'pl Cũng đúng.',
		'show scene cr2 with fadeIn',
		'ct Lớp ơi hôm nay chúng ta sẽ làm bài hoạt đống nhóm nhé',
		'ct cô cần các bạn tự chọn ra nhóm của mình, mỗi nhóm gồm 3 thành viên và 1 nhóm trưởng nhé',
		'bcls {{player.name}}, Mai Anh, tụi mình bên này nè, vô chung cho vui',
		'pl Tới liền!',
		'qt Hạnh ơi tạo nhóm mình nhé.',
		'mh ok ông.',
		'"Sau 5 phút náo loạn thì lớp bắt đầu trật tự lại, cô Thảo nhìn một vòng quanh lớp...<br>Cô nhận thấy Linh đang đứng cô đơn môt mình"',
		'ct Linh ơi con ra hỏi xem nhóm bạn nào còn thiếu người không nè!',
		'tl D-dạ',
		'"Linh rè chừng bước tới nhóm nhóm của Tuấn và hỏi:"',
		'tl M-mình có thể vô nhóm các bạn được không?',
		'qt Nhóm mình như đủ rồi.',
		'mh Ừ... như đủ thật',
		'"Linh lũi thủi trở về chỗ ngồi của cô ấy"',
		'jump choice1',
	],
	'choice1': [{
		'Choice': {
			'Dialog': '<span style="color: #5bcaff">Bạn</span> nhìn theo bóng dáng cô ấy và quyết định:',
			'1': {
				'Text': 'Không phải việc của mình',
				'Do': 'jump không_liên_quan',
			},
			'2': {
				'Text': 'Mời Linh vào nhóm của mình',
				'Do': 'jump mời_linh',
			},
			'3': {
				'Text': 'Hỏi ý kiến Mai Anh',
				'Do': 'jump hỏi_ý_kiến',
			},
			'4': {
				'Text': 'Chờ cô Thảo xử lý',
				'Do': 'jump hỏi_giáo_viên',
			},
		}
	}],
	'không_liên_quan': [
		'"<span style="color: #5bcaff">Bạn</span> tiếp tục làm bài với nhóm"',
		'"Mọi chuyện vẫn tiếp tục"',
		'"không có tiếng cải cã"',
		'"Không ai làm gì rõ ràng là xấu."',
		'"Nhưng sâu trong thâm tâm bạn, bạn vẫn cảm thấy có điều gì đó <span style="color: #f51f1f">không ổn</span>"',
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
				}
			},
		}
	],
	'mời_linh': [
		'pl Linh ơi, nhóm mình còn thiếu thành viên nè, bạn tham gia với tụi mình nhé!',
	],
	'hỏi_ý_kiến': [
		'pl Mai Anh, cậu thấy sao?',
		'"Mai Anh nhìn theo ánh mắt <span style="color: #5bcaff">Bạn</span>"',
		'ma Tớ nghĩ chúng ta nên mời cậu ấy...',
	],
	'hỏi_giáo_viên': [
		'"<span style="color: #5bcaff">Bạn</span> im lặng chờ cô xử lý"',
	]
});