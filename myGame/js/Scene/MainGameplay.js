var MainGameplay = function(game) {};
MainGameplay.prototype = {
	preload: function() {
		
	},
	create: function() {
		text = game.add.text(game.world.centerX, game.world.centerY)
		text.setText("Main Gameplay");
		text.anchor.x = 0.5;
		text.anchor.y = 0.5;
		game.stage.backgroundColor = "#FACADE";
	},
	update: function() {
		if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
			game.state.start('EndScreen');
	}
}