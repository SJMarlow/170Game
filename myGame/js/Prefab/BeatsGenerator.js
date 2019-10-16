TutorialGameplay.prototype.BeatsGenerator = function(bpm, time){
	var posX = 800;
	var posYA = 70;
	var posYB = 160;
	var posYC = 250;
	var interval = 60/bpm * 60;
	if(time == interval){
		this.testBit1 = new Bit(game, 900, 70, 'leftArrow', 1, 'left', this.leftButton);
		game.add.existing(this.testBit1);
	}
	if(time == 61){
		this.time = 1;
	}



}