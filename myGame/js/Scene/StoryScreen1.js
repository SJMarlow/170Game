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

		this.instructionsBox = null;
		this.instructionsShown = false;
		var portait1 = game.add.sprite(50, 100, 'StoryScene1ImageLeft1');
		var dialogue1 = game.add.sprite(10, 340, 'StoryScene1TextLeft1');
		var portait2 = game.add.sprite(520, 10, 'StoryScene1ImageRight1');
		var dialogue2 = game.add.sprite(420, 250, 'StoryScene1TextRight1');
		//instructionsBox = game.add.sprite(game.width/2, game.height/2, 'instructions');
	},
	update: function() {
		if(game.input.keyboard.justPressed(Phaser.Keyboard.LEFT) && this.instructionsShown == false) {
			this.instructionsBox = game.add.sprite(game.width/2 - 300, game.height/2 - 150, 'instructions');
			this.instructionsBox.scale.setTo(1.3, 1.3);
			this.instructionsShown = true;	
		} else if (game.input.keyboard.justPressed(Phaser.Keyboard.LEFT) && this.instructionsShown == true) {
			game.state.start('TutorialGameplay');
		}
	}
}