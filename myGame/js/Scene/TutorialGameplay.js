var TutorialGameplay = function(game) {};
TutorialGameplay.prototype = {
	preload: function() {
		
	},
	create: function() {
		text = game.add.text(game.world.centerX, game.world.centerY)
		text.setText("Tutorial Gameplay");
		text.anchor.x = 0.5;
		text.anchor.y = 0.5;
		game.stage.backgroundColor = "#412312";
	},
	update: function() {
		if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
			game.state.start('StoryScreen2');
	}
}