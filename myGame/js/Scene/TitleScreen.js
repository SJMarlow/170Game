var TitleScreen = function(game) {};
TitleScreen.prototype = {
	preload: function() {

		game.load.image('rightArrow', 'assets/img/rightArrow.png');
		game.load.image('leftArrow', 'assets/img/leftArrow.png');
		game.load.image('downArrow', 'assets/img/downArrow.png');
		game.load.image('sheet', 'assets/img/sheet.png');
		game.load.audio('bgMusic', 'assets/audio/90bpmTutorial.mp3');
		
	},
	create: function() {
		text = game.add.text(game.world.centerX, game.world.centerY)
		text.anchor.x = 0.5;
		text.anchor.y = 0.5;
		text.setText("Title Screen");
		game.stage.backgroundColor = "#4488AA";
	},
	update: function() {
		if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
			game.state.start('StoryScreen1');
	}
}