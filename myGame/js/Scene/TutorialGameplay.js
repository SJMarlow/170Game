var TutorialGameplay = function(game) {};
TutorialGameplay.prototype = {
	preload: function() {
	},
	create: function() {
		//Add by Guanchen Liu
		//Version1
		//Adding sheets and button to the scene
		this.time = 1;
		this.startTime = game.time.now;
		this.sheet = game.add.sprite(0,25,'sheet');
		this.sheet.scale.x = 1.2;
		this.sheet.scale.y = 0.9;
		config.songNum = 2;
		this.songStartOffset = 2000; // I'll have this handled better in the future.
		this.songStarted = false;


		//game.time.events.add(Phaser.Timer.SECOND * 2, Gameplay(game), this);
		Gameplay(game); // GamePlay.js
		game.stage.backgroundColor = "#412312";
	},

	update: function() {
		//Change by Guanchen Liu
		//I change the key to process the scene to ENTER key
		this.time++;
		if(this.startTime+this.songStartOffset<game.time.now && !this.songStarted){
			music.play();
			this.songStarted = true;
		}
		//this.BeatsGenerator(90,this.time);
		if(game.input.keyboard.isDown(Phaser.Keyboard.ENTER)||this.startTime+62000<game.time.now ){ // time for end of song is hardcoded for now
			game.state.start('StoryScreen2');
			music.stop();
		}
	}
}
