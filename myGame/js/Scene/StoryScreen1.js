var StoryScreen1 = function(game) {};
StoryScreen1.prototype = {
	preload: function() {
		
	},
	create: function() {
		//text = game.add.text(game.world.centerX, game.world.centerY)
		//text.setText("Story Screen 1");
		//text.anchor.x = 0.5;
		//text.anchor.y = 0.5;
		game.stage.backgroundColor = "#112233";

		var portait1 = game.add.sprite(50, 100, 'StoryScene1ImageLeft1');
		var dialogue1 = game.add.sprite(10, 340, 'StoryScene1TextLeft1');
		var portait2 = game.add.sprite(520, 10, 'StoryScene1ImageRight1');
		var dialogue2 = game.add.sprite(420, 250, 'StoryScene1TextRight1');
	},
	update: function() {
		if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
			game.state.start('TutorialGameplay');
	}
}