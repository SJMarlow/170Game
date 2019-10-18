var StoryScreen2 = function(game) {};
StoryScreen2.prototype = {
	preload: function() {
		
	},
	create: function() {
		//text = game.add.text(game.world.centerX, game.world.centerY)
		//text.setText("Story Screen 2");
		//text.anchor.x = 0.5;
		//text.anchor.y = 0.5;
		game.stage.backgroundColor = "#F2F91F";

		var portait1 = game.add.sprite(50, 10, 'StoryScene2ImageLeft1');
		var dialogue1 = game.add.sprite(10, 250, 'StoryScene2TextLeft1');
		var portait2 = game.add.sprite(520, 100, 'StoryScene2ImageRight1');
		var dialogue2 = game.add.sprite(420, 340, 'StoryScene2TextRight1');
	},
	update: function() {
		if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
			game.state.start('MainGameplay');
	}
}