//Create by Guanchen Liu
//Prefab:Bit
//Version1
//This script will generate bis on the sheet
//Related to the button
function Bit(game, x, y, key, frame, dir, button) {
	Phaser.Sprite.call(this, game, x, y, key, frame);
	this.anchor.set(0.5);
	this.dir = dir;
	game.physics.enable(this);
	this.scale.x = 0.4;
	this.scale.y = 0.4;
	this.button = button;
	this.body.collideWorldBounds = false;
	this.body.gravity.y = 0;
	this.body.velocity.x = -250;
	this.scoreText = game.add.text(this.button.body.x + 200, this.body.y);
	this.scoreText.anchor.x = 0.5;
	this.scoreText.anchor.y = 0.5;
	this.isKilled = false;

}

Bit.prototype = Object.create(Phaser.Sprite.prototype);
Bit.prototype.constructor = Bit;

Bit.prototype.update = function(){
	if(this.button.alpha == 1 && !this.isKilled){
		if(Math.abs(this.body.x - this.button.body.x) < 25){
			this.killText();
			this.scoreText.setText("Great");
			game.time.events.add(Phaser.Timer.SECOND * 1, this.killText, this);
			this.kill();

		}else if(Math.abs(this.body.x - this.button.body.x) < 50){
			this.killText();
			this.scoreText.setText("Good");
			game.time.events.add(Phaser.Timer.SECOND * 1, this.killText, this);
			this.kill();
		}else if(Math.abs(this.body.x - this.button.body.x) < 90){
			this.killText();
			this.scoreText.setText("Bad");
			game.time.events.add(Phaser.Timer.SECOND * 1, this.killText, this);
			this.kill();
		}
	}else if (this.button.body.x - this.body.x > 90 && !this.isKilled){
			this.killText();
			this.scoreText.setText("Miss");
			game.time.events.add(Phaser.Timer.SECOND * 1, this.killText, this);
			this.kill();
	}
}

Bit.prototype.killText = function(){
	this.scoreText.setText('',true);
	this.isKilled = true;
}