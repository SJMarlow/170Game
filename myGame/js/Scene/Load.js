var Load = function(game) {};
Load.prototype = {
	preload: function() {

		//Load IMAGE Assets
		game.load.path = 'assets/img/';

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

		//Play stage assets
		game.load.image('rightArrow', 'rightArrow.png');
		game.load.image('leftArrow', 'leftArrow.png');
		game.load.image('downArrow', 'downArrow.png');
		game.load.image('sheet', 'sheet.png');
		game.load.spritesheet('guitar', 'guitarCharacter.png', 1200,1600);

		//Load AUDIO assets
		game.load.path = 'assets/audio/';

		//tutorial music
		game.load.audio('bgMusic', '90bpmTutorial.mp3');
	},
	create: function() {
		game.state.start('TitleScreen');
	}
};