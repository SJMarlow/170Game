var Load = function(game) {};
Load.prototype = {
	preload: function() {
		//Load Graphics Assets
		game.load.path = 'assets/img/';

		//story demo portaits
		game.load.image('Alphinaud', 'Alphinaud.png');
		game.load.image('Exarch', 'Exarch.png');
		
		//story demo textboxes
		game.load.image('Dialogue1', 'Dialogue1.png');
		game.load.image('Dialogue2', 'Dialogue2.png');
	},
	create: function() {
		game.state.start('TitleScreen');
	}
};