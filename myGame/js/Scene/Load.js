var Load = function(game) {};
Load.prototype = {
	preload: function() {

		//Load IMAGE Assets
		game.load.path = 'assets/img/';

		//instructions splash assest
		game.load.image('instructions', 'Instructions.png');

		//tutorial assets
		game.load.image('rightArrow', 'rightArrow.png');
		game.load.image('leftArrow', 'leftArrow.png');
		game.load.image('downArrow', 'downArrow.png');
		game.load.image('sheet', 'sheet.png');

		//story scene portaits
		//Naming format: GameStateTitle ImageSide SequenceNumber
		game.load.image('StoryScene1ImageLeft1', 'Alphinaud.png');
		game.load.image('StoryScene1ImageRight1', 'Exarch.png');
		game.load.image('StoryScene2ImageLeft1', 'Exarch.png');
		game.load.image('StoryScene2ImageRight1', 'Alphinaud.png');
		
		//story scene textboxes
		//Naming format: GameStateTitle TextSide SequenceNumber 
		game.load.image('StoryScene1TextLeft1', 'Dialogue1.png');
		game.load.image('StoryScene1TextRight1', 'Dialogue2.png');
		game.load.image('StoryScene2TextLeft1', 'Dialogue2.png');
		game.load.image('StoryScene2TextRight1', 'Dialogue1.png');

		//Ui for title screen
		//Naming format: GameStateTitle ButtonName
		game.load.image('TitleScreenStartButton', 'startbutton.png');
		game.load.image('TitleScreenTitle', 'TitleHyperBeast.png');

		//Play stage assets
		game.load.image('rightArrow', 'rightArrow.png');
		game.load.image('leftArrow', 'leftArrow.png');
		game.load.image('downArrow', 'downArrow.png');
		game.load.image('sheet', 'sheet.png');
		game.load.spritesheet('guitar', 'guitarCharacter.png', 1200, 1600);
		game.load.spritesheet('singer', 'singerCharacter.png', 1200, 1600);
		game.load.spritesheet('drumer', 'drumCharacter.png', 4000, 3000);

		//Load AUDIO assets
		game.load.path = 'assets/audio/';

		//tutorial music
		game.load.audio('120bpmTutorial', '120bpmTutorial.mp3');
		game.load.audio('90bpmTutorial', '90bpmTutorial.mp3');
		game.load.audio('The_Goondock_Saint_-_A_hole_in_the_sky_-_Cut', 'The_Goondock_Saint_-_A_hole_in_the_sky_-_Cut.mp3');
		game.load.audio('Cassetter_-_Neon_Towers_-_Cut', 'Cassetter_-_Neon_Towers_-_Cut.mp3');
		game.load.audio('hitsound2', 'hitsound1.mp3')
		game.load.audio('bgMusic', '90bpmTutorial.mp3');
	},
	create: function() {
		game.state.start('TitleScreen');
	}
};