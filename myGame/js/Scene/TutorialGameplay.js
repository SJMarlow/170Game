var TutorialGameplay = function(game) {};
TutorialGameplay.prototype = {
	preload: function() {
		
	},
	create: function() {
		//Add by Guanchen Liu
		//Version1
		//Adding sheets and button to the scene
		this.time = 1;
		this.sheet = game.add.sprite(0,25,'sheet');
		this.sheet.scale.x = 1.2;
		this.sheet.scale.y = 0.9;

		//Related to Prefab/Button.js
		this.leftButton = new Button(game , 80, 70, 'leftArrow',1,'left');
		game.add.existing(this.leftButton);

		this.rightButton = new Button(game , 80, 160, 'rightArrow',1,'right');
		game.add.existing(this.rightButton);

		this.downButton = new Button(game , 80, 250, 'downArrow',1,'down');
		game.add.existing(this.downButton);

		//Add by Guanchen Liu
		//Version1
		//Add characters to the scene
		this.guitar = new Character(game, 200, 450, 'guitar', 1, this.leftButton);
		game.add.existing(this.guitar);

		//Add a test bit for the game
		//this.testBit1 = new Bit(game, 900, 70, 'leftArrow', 1, 'left', this.leftButton);
		//game.add.existing(this.testBit1);
		//
		//this.testBit2 = new Bit(game, 1100, 160, 'rightArrow', 1, 'right', this.rightButton);
		//game.add.existing(this.testBit1);
		//
		//this.testBit3 = new Bit(game, 1500, 250, 'downArrow', 1, 'down', this.downButton);
		//game.add.existing(this.testBit1);
		let songBpm = 60;
		let noteVelocity = 250; // Hardcoded in Bit.js still. Just here for calcs right now.
		let temp = map.data;
		let width = map.width; // max # of notes for one lane
		let height = map.height; // # of lanes
		let startOffset = 500;
		let noteDistance = (noteVelocity/(2*((songBpm)/60)));
		for(let i = 0; i<width;i++){ // lane 1
			if(temp[i]==1){
				this.testBit1 = new Bit(game, startOffset+i*noteDistance, 70, 'leftArrow', 1, 'left', this.leftButton);
			}
			if((temp[i+width]) == 1){ // lane 2
				this.testBit2 = new Bit(game, startOffset+i*noteDistance, 160, 'rightArrow', 1, 'right', this.rightButton);
			}	
			if(temp[i+(width*2)] == 1){ // lane 3
				this.testBit3 = new Bit(game, startOffset+i*noteDistance, 250, 'downArrow', 1, 'down', this.downButton);
			}
			
		}	
		game.stage.backgroundColor = "#412312";
	},
	update: function() {
		//Change by Guanchen Liu
		//I change the key to process the scene to ENTER key
		this.time++;
		//this.BeatsGenerator(90,this.time);
		if(game.input.keyboard.isDown(Phaser.Keyboard.ENTER))
			game.state.start('StoryScreen2');
		
	}
}