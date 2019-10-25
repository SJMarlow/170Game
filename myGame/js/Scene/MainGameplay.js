var MainGameplay = function(game) {};
MainGameplay.prototype = {
	preload: function() {
		
	},
	create: function() {
		//text = game.add.text(game.world.centerX, game.world.centerY)
		//text.setText("Main Gameplay");
		//text.anchor.x = 0.5;
		//text.anchor.y = 0.5;
		//Add by Guanchen Liu
		//Version1
		//Adding sheets and button to the scene
		this.time = 1;
		this.startTime = game.time.now;
		this.sheet = game.add.sprite(0,25,'sheet');
		this.sheet.scale.x = 1.2;
		this.sheet.scale.y = 0.9;
		config.songNum = 3;
		Gameplay(game);
		game.stage.backgroundColor = "#990021";
		
	},
	update: function() {
		//Change by Guanchen Liu
		//I change the key to process the scene to ENTER key
		this.time++;
		if(game.input.keyboard.isDown(Phaser.Keyboard.ENTER))
			game.state.start('EndScreen');
	}
}