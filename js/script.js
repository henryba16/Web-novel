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
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'school_entrance': 'BG-01A.png',
	'classroom': "BG-03.png",
	'cr2': "BG-04.png",
	'hallway': 'BG-02.png',
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
		name: 'Quang Tuấn',

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
				'Warning': 'Bạn cần nhập tên!'
			}
		}, 
		'play sound bell',
		'07:05 sáng.',
		'show scene school_entrance with fadeIn',
		'play sound school with fade 2 loop',
		'"Sân trường vào đầu tuần. Học sinh từ nhiều hướng bước vào cổng. Những chiếc xe đạp lần lượt được dựng ngay ngắn trong khu vực để xe."',
		'"Tiếng bánh xe lăn trên sân. Tiếng gọi nhau í ới. Tiếng cười nói về những câu chuyện cuối tuần."',
		'"Những tiếng cười đùa ấy dần chuyển thành những bước chân háo hức đến lớp."',

		'play sound bike-fall',
		'show character pl normal at center with rotateInDownRight',
		'"..."',
		'pl Chết rồi sắp trễ học đến nơi rồi!',
		'hide character pl with fadeOutRightBig',
		'"{{player.name}} chạy vụt về phía dãy phòng học khối 8, xuyên qua dãy người đông đúc."',
		'show scene hallway with fadeIn',
		'"Thứ Hai luôn bắt đầu bằng rất nhiều âm thanh."',
		'"Tiếng bạn bè kể chuyện cuối tuần."',
		'"Tiếng bàn luận về bài kiểm tra sắp tới."',
		'"Tiếng gọi nhau từ cuối hành lang."',
		'"Mọi thứ dường như vẫn giống mọi ngày."',
		'"Nhưng từ hôm nay, lớp 8A sẽ đón thêm một thành viên mới."',

		'play sound heel-walk',
		'show scene classroom with fadeIn',
		'"Tiếng bước chân vang vọng ngoài lớp học, học sinh dù có đang làm gì đều bỏ dở việc đang làm mà ngoan ngoãn quay về chỗ ngồi của họ."',
		'stop sound with fade 1',
		'ct Chào các em, trước khi bắt đầu tiết học, cô muốn giới thiệu với cả lớp một bạn mới chuyển đến trường chúng ta!',
		'"Một cô bé bước vào lớp với mái tóc đen buộc thấp, chiếc ba lô màu xám trên vai và một cuốn sổ nhỏ được cô cẩn thận cầm trên tay."',
		'"Đứng trước cả lớp, cô bé nhẹ xiết cuốn sổ tay, lấy hết dũng khí để giới thiệu."',
		'tl Chào c-các bạn. M-mình là Trúc Linh. Mong mọi người giúp đỡ mình!',
		'ct Từ nay về sau chúng ta là người một nhà sống hòa thuận với nhau nhé!',
		'play sound clap with',

		'pl bạn ấy có vẻ hơi hồi hộp.<br>-{{player.name}} nói với Minh Anh-',
		'ma Ừ... Nhưng mà nếu cậu chuyển đến một môi trường hoàn toàn mới thì cậu cũng hồi hộp như bạn ấy thôi.',
		'pl Cũng đúng...',
		'show scene cr2 with fadeIn',
		'ct Lớp ơi hôm nay chúng ta sẽ làm hoạt động nhóm nhé!<br>Cô cần các bạn tự chọn ra nhóm của mình, mỗi nhóm gồm 3 thành viên và 1 nhóm trưởng.',
		'bcl {{player.name}}, Mai Anh, tớ bên này nè, vô chung cho vui!',
		'pl Tới liền!',
		'qt Ê Hạnh, vào chung nhóm với tao.',
		'mh Ok ông.',
		'"Sau 5 phút náo loạn thì lớp bắt đầu trật tự lại, cô Thảo nhìn một vòng quanh lớp.<br>Cô chợt nhận thấy Linh đang đứng cô đơn lẻ loi một mình."',
		'ct Linh ơi con ra hỏi xem nhóm bạn nào còn thiếu người không nè!',
		'tl D-dạ.',
		'"Linh dè chừng bước tới nhóm nhóm của Tuấn và hỏi:"',
		'tl M-mình có thể vô nhóm các bạn được không?',
		'qt Nhóm tao đủ rồi, mày sang chỗ khác đi!',
		'"Linh buồn bã nhìn về phía nhóm của bạn cùng lớp, nhưng chẳng có ai lên tiếng."',
		'mh Ừ đủ rồi cậu tìm chỗ khác đi',
		'tl Ừm... tớ sẽ tìm nhóm khác.',
		'"Linh lủi thủi trở về chỗ ngồi của cô ấy"',
		'jump choice1',
	],
	'choice1': [{
		'Choice': {
			'Dialog': 'pl ...',
			'1': {
				'Text': 'Kệ dù sao cũng không phải việc của mình.',
				'onChosen':function(){
					addempathy(-5);
					addawareness(-3);
					monogatari.storage().choice[1] = false;
				},
				'Do': 'jump không_liên_quan',
				'Condition': function(){
					return monogatari.storage().choice[1]
				},
			},
			'2': {
				'Text': 'Mời Linh vào nhóm của mình.',
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
				'Text': 'Chờ cô Thảo xử lý.',
				'onChosen':function(){
					addsafe(2);
					addawareness(1);
				},
				'Do': 'jump chờ_giáo_viên',
			},
		}
	}],
	'không_liên_quan': [
		'pl Tiếp tục làm bài nào các bạn!',
		'"Mọi chuyện vẫn tiếp tục"',
		'"Một lúc sau, cô Thảo đành sắp xếp cho Linh tham gia vào một nhóm khác."',
		'"Không có tiếng cải vã"',
		'"Không ai làm gì rõ ràng là xấu"',
		'"Nhưng sâu trong thâm tâm bạn, bạn có nghĩ đây là có phải là hành động <span style="color: #f51f1f">nên làm?</span>"',
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
		'pl Linh ơi, nhóm tớ còn thiếu thành viên nè! Bạn tham gia với tụi mình nhé!',
		'bcl Đúng rồi, nhóm mình còn thiếu một người nữa, bạn có muốn tham gia không?',
		'tl Được... chứ?',
		'pl Được! Cậu sang đây ngồi với chúng tớ đi!',
		'"Linh ngồi xuống trong sự bối rối, dường như cô ấy nghĩ rằng sẽ không một ai cần một người ít nói như cô ấy tham gia nhóm của mình."',
		'ma Hihi, chào mừng cậu đến với nhóm của tụi mình!',
		'tl C-chào các bạn.',
		'<h5>🌱Một hành động nhỏ</h5><br>Bạn đã chọn bước về phía người đang đứng một mình.<br>Đôi khi, chỉ một câu nói đơn giản cũng đủ để khiến ai đó cảm thấy mình thuộc về nơi này.',
		'jump scene2',

	],
	'hỏi_ý_kiến': [
		'pl Mai Anh, cậu thấy sao? Tớ không biết có nên mời cậu ấy không nữa...',
		'"Mai Anh nhìn theo ánh mắt bạn và nói:"',
		'ma Thôi để tớ!',
		'ma Trúc Linh ơi! Nhóm tớ còn người này!',
		'"Linh ngạc nhiên quay đầu lại nhìn."',
		'tl T-tớ c-có thể vô nhóm cậu ư?',
		'Được chứ! Cậu vào ngồi với tụi mình đi.',
		'"Trúc Linh bối rối khẽ kéo ghế ngồi chung nhóm với Mai Anh."',
		'<h5>💬Một bước còn thiếu?</h5><br>Bạn đã nhận ra Linh đang đứng một mình và muốn tìm cách giúp đỡ.<br>Nhưng có lẽ vì bạn sợ các thành viên khác không đồng ý?.<br>Hay đến cả bạn còn không biết tại sao bạn chọn.',
		'May mắn thay, Mai Anh đã chủ động bước đến và mời Linh vào nhóm.<br>Nhưng liệu bạn có chắc rằng Mai Anh sẽ luôn đứng lên thay bạn...<br>Đôi khi, chúng ta chỉ cần thêm một chút tự tin để tự mình nói ra điều mà mình đã nghĩ.',
		'jump scene2',

	],
	'chờ_giáo_viên': [
		'pl ...',
		'ct Linh em vẫn chưa có nhóm hả?',
		'bcl Cô ơi cho nhóm em cũng thiếu người nè cô!',
		'ct Vậy con sang nhóm đó nha Linh',
		'tl D-dạ...',
		'"Linh khẽ gật đầu rồi bước về phía nhóm bạn cùng lớp."',
		'"Cô Thảo tiếp tục quan sát cả lớp, còn mọi người cũng nhanh chóng quay lại với phần việc của mình."',
		'"Cuối cùng thì Linh cũng đã có một nhóm."',
		'"Mọi chuyện có vẻ đã được giải quyết ổn thỏa."', 
		'"Nhưng chẳng hiểu sao, {{player.name}} vẫn cảm thấy có gì đó <span style="color: #f52323">không ổn.</span>"',
		'<h5>🍀May mắn?</h5><br>May mắn vì cô Thảo nhận ra?<br>May mắn vì vẫn có bạn lên tiếng thay mình?<br>May mắn vì cuối cùng Linh cũng có một nhóm là mọi chuyện đã thật sự ổn?',
		'jump scene2',
	],
	'scene2': [
		'show scene hallway with fadeIn',
		'play sound school-bell2',
		'ct Lớp ơi, chúng ta kết thúc ở đây nhé!<br>Hẹn gặp lại các em vào tiết học sau nhé!',
		'stop sound with fade 1',
		'"Hành lang dần trở nên đông đúc, học sinh lớp 8A lần lượt rời khỏi lớp học, tiếng cười nói dần trở nên náo nhiệt."',
		'"{{player.name}} và Mai Anh đang cùng nhau đi về cầu thang thì bỗng nghe thấy giọng Tuấn vang vọng từ cầu thang lên:"',
		'qt Ê con kia! Bộ cuốn sổ đó đáng giá đến mức mày luôn phải cầm theo hả?',
		'tl ...',
		'tl T-tớ thích vẽ...',
		'qt Mày đưa đây tao xem nào.',
		'"Linh do dự vài giây nhưng vẫn quyết định đưa cho Tuấn."',
		'play sound book',
		'qt Vãi! Mày cũng vẽ được đấy chứ.',
		'"Mỹ Hạnh cũng bước tới và nhìn vào cuốn sổ tay của Linh. Sau vài giây, cô bé cười khẩy."',
		'mh Ủa Linh? Sao cậu toàn vẽ mấy thứ buồn không vậy?',
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
					'Condition': function(){
						return monogatari.storage().choice[2].a;
					},
					'onChosen':function(){
						addempathy(-8);
						addawareness(-5);
						monogatari.storage().choice[2]=false;
					},
					'Do': 'jump joke',
				},
				'2': {
					'Text': 'Đến hỏi thăm Linh.',
					'onChosen':function(){
						addawareness(5);
						addempathy(8);
					},
					'Do': 'jump asklinh',
				},
				'3': {
					'Text': 'Nhắc nhở Tuấn.',
					'onChosen':function(){
						addawareness(8);
						addsafe(5);
					},
					'Do': 'jump telltuan',
				},
				'4': {
					'Text': 'Tiếp tục quan sát.',
					'onChosen':function(){
						addawareness(5);
						addsafe(8);
					},
					'Do': 'jump observe',
				}
			},
		},
	],
	'joke':[
		'pl Haha, đúng là kỳ lạ thật đấy!',
		'ma Tớ thấy cậu ấy có vẻ không thoải mái với trò đùa này.',
		'pl Cơ mà sao cậu ấy chẳng nói gì cả. Chắc cậu ấy cũng biết là chúng ta chỉ đùa thôi mà.',
		'"Mai Anh lặng lẽ nhìn Linh với vẻ mặt lo lắng, còn {{player.name}} thì vẫn tiếp tục cười theo Tuấn và Hạnh."',
		'"Linh im lặng ôm cuốn sổ trước ngực.<br>Cậu ấy lặng lẽ bước đi."',
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
		'pl Này Mai Anh! Mai Anh!',
		'pl Cậu thấy những bức tranh đó chứ? Chúng thật kì quặc!',
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
		'"bạn khều nhẹ Linh."',
		'pl Này Linh! Tớ đang thắc mắc tại sao cậu lại vẽ những bức tranh kì cục này đấy? Bộ cậu không biết vẽ à?',
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
		'pl Này, Linh! Cậu vẽ những bức tranh kỳ lạ thật đấy!',
		'ma Tớ cũng thắc mắc thật đó. Nếu cậu cần tâm sự thì bọn tớ sẽ luôn lắng nghe!',
		'tl ...',
		'tl Chúng... Từng là tất cả những kỷ niệm của tớ khi ở những trường cũ.',
		'pl Trường cũ? Chúng như thế nào vậy?',
		'"Khóe mi Linh bỗng không kìm được một vài giọt nước mắt mà rơi xuống...',
		'tl Chúng-C-chúng kinh khủng v-và xấu xí... Tớ s-sợ lắm...',
		'ma Hả, ai đã làm những gì mà khiến cậu ra nông nổi này vậy?',
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
		'"{{player.name}} nhìn Linh với vẻ mặt hoài nghi cho dù vậy Linh vẫn im lặng không nói nửa lời."',
		'play school-bell2',
		'ma Nào hai người, đùng nhìn nhau nữa, chúng ta cùng về lớp nào.',
		'tl ...',
		'<h5>🔇 Im lặng</h5><br>Mặc dù bạn đã nhận ra điểm bất thường từ Linh nhưng vẫn chọn tiếp tục quan sát.<br>Sự im lặng kéo dài sẽ khiến bất kỳ người nào kể cả bạn thân của bạn cũng sẽ cảm thấy khó chịu<br>Thay vào đó ta có thể  bắt đầu cuộc trò chuyện bằng một vài thứ gần gũi.',
		'jump scene3',
	],
	'telltuan':[
		'pl Nào 2 người tha cho Linh đi, mấy cậu không thấy cậu ấy đang không thích à?',
		'qt Ý! thằng bạn trai nhỏ mày đến rồi kia, mà có gì to tát đâu. Bọn tao chỉ đùa chút thôi mà {{player.name}}!',
		'pl Mấy cậu có thể thấy điều đó vui. Nhưng nó không có nghĩa là Linh sẽ thấy vui!',
		'qt Kệ dù sao chọc con này cũng chẳn có gì vui, thôi bọn tao về trước đây {{player.name}}!',
		'"Tiếng cười đùa của Tuấn và Hạnh khuất dần theo tiếng bước chân của họ."',
		'<h5>💡 Nhận diện tốt!</h5><br>Việc nhận biết tác động của hành vi/ lời nói... đối với người xung quanh là chìa khóa dẫn đến một tình bạn đẹp!<br>Một lời nói/ hành vi có thể không có ý làm tổn thương người khác, nhưng chúng ta phải biết dừng lại khi nó khiến người khác không thoải mái.',
		'jump scene3',
	],
	'observe':[
		'pl ...',
		'pl "Linh liên tục nhìn xuống cuốn sổ"<br>"Cậu ấy ôm nó sát vào người"<br>"Mọi chuyện không đơn giản đến thế!"',
		'"Linh nhanh chóng rời khỏi hành lang."',
		'<h5>👁️ Bạn đã nhận ra dấu hiệu!</h5><br>Quan sát là bước đầu tiên trong giải quyết vấn đề.<br>Nhưng việc nhận ra vấn đề và xỷ lý vấn đề là hai điều hoàn toàn khác nhau!<br>Nhưng bạn nên làm gì tiếp theo để vừa đảm bảo an toàn cho bạn và mọi người nhưng vẫn có thể giúp bạn?',
		'jump scene3',
	],
	'scene3':[
		'end',
	],
});
