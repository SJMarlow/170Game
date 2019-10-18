var Load = function(game) {};
Load.prototype = {
	preload: function() {
		//Load Graphics Assets
		game.load.path = 'assets/img/';

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
	},
	create: function() {
		game.state.start('TitleScreen');
	}
};