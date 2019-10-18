var TitleScreen = function(game) {};
TitleScreen.prototype = {
	preload: function() {
		
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