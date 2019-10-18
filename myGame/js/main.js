var config = {
    width: 800,
    height: 600,
    renderer: Phaser.AUTO,
    antialias: false,
}
var map = []
$.getJSON('./assets/test.json',function(data){
	map = data.layers[0]
});

window.onload = function() {
	game = new Phaser.Game(config);
	game.state.add('TitleScreen', TitleScreen); 
	game.state.add('StoryScreen1', StoryScreen1);
	game.state.add('TutorialGameplay', TutorialGameplay);
	game.state.add('StoryScreen2', StoryScreen2);
	game.state.add('MainGameplay', MainGameplay);
	game.state.add('EndScreen', EndScreen);

	game.state.start('TitleScreen');
}

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
var StoryScreen1 = function(game) {};
StoryScreen1.prototype = {
	preload: function() {
		
	},
	create: function() {
		text = game.add.text(game.world.centerX, game.world.centerY)
		text.setText("Story Screen 1");
		text.anchor.x = 0.5;
		text.anchor.y = 0.5;
		game.stage.backgroundColor = "#112233";
	},
	update: function() {
		if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
			game.state.start('TutorialGameplay');
	}
}

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
		//I change the key to process the scene to SPACE key.t
		this.time++;
		//this.BeatsGenerator(90,this.time);
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACE))
			game.state.start('StoryScreen2');
		
	}

}
var StoryScreen2 = function(game) {};
StoryScreen2.prototype = {
	preload: function() {
		
	},
	create: function() {
		text = game.add.text(game.world.centerX, game.world.centerY)
		text.setText("Story Screen 2");
		text.anchor.x = 0.5;
		text.anchor.y = 0.5;
		game.stage.backgroundColor = "#F2F91F";
	},
	update: function() {
		if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
			game.state.start('MainGameplay');
	}
}
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
var EndScreen = function(game) {};
EndScreen.prototype = {
	preload: function() {
		
	},
	create: function() {
		text = game.add.text(game.world.centerX, game.world.centerY)
		text.setText("End Screen");
		text.anchor.x = 0.5;
		text.anchor.y = 0.5;
		game.stage.backgroundColor = "#01FE23";
	},
	update: function() {
		if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
			game.state.start('TitleScreen');
	}
}


