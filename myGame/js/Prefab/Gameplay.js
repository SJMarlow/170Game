// not technically a prefab
function Gameplay(game){
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

	
	songSelector = config.songNum;	
	music = game.add.audio(maps[songSelector].song, 1, false);
	
	if(config.hitsound)
		hitsound = game.add.audio('hitsound2', 1, false); // to help sync the music better 
	let songBpm = maps[songSelector].bpm;
	let noteVelocity = 300; // Hardcoded in Bit.js still. Just here for calcs right now.
	let temp = maps[songSelector].notes.data;
	let width = maps[songSelector].notes.width; // max # of notes for one lane
	let height = maps[songSelector].notes.height; // # of lanes
	let startOffset = maps[songSelector].offset;
	let noteDistance = (noteVelocity/(2*((songBpm)/60)));
	for(let i = 0; i<width;i++){ // lane 1
		totalDistance = startOffset+(i*noteDistance);
		//console.log("At i = "+i+": "+totalDistance)
		if(temp[i]==1){
			this.testBit1 = new Bit(game, totalDistance, 70, 'leftArrow', 1, 'left', this.leftButton);
		}
		if((temp[i+width]) == 1){ // lane 2
			this.testBit2 = new Bit(game, totalDistance, 160, 'rightArrow', 1, 'right', this.rightButton);
		}	
		if(temp[i+(width*2)] == 1){ // lane 3
			this.testBit3 = new Bit(game, totalDistance, 250, 'downArrow', 1, 'down', this.downButton);
		}
		
	}	
	music.play();
}	