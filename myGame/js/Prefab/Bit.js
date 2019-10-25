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
	this.body.velocity.x = -300;
	this.scoreText = game.add.text(this.button.body.x + 200, this.body.y);
	this.scoreText.anchor.x = 0.5;
	this.scoreText.anchor.y = 0.5;
	this.isKilled = false;
	
	game.add.existing(this)
}

Bit.prototype = Object.create(Phaser.Sprite.prototype);
Bit.prototype.constructor = Bit;
lastTime = 0
offset = 0;
offsetNum = 0
Bit.prototype.update = function(){
	
	if(this.button.alpha == 1 && !this.isKilled){
		// Only keeping this to test the sync for music better later on/if we decide to have hitsounds later.
		if(Math.abs(this.body.x - this.button.body.x) < 2 && Math.abs(this.body.x - this.button.body.x) > -2){
			if(config.hitsound)
				hitsound.play();
			//console.log(game.time.now-lastTime )
			lastTime = game.time.now;
			//this.scoreText.setText("Perfect");
			//game.time.events.add(Phaser.Timer.SECOND * 1, this.killText, this);
			//this.kill();
		}
		// Same goes for the commented-out section below:
		
		if(Math.abs(this.body.x - this.button.body.x) < 25){
			this.killText();
			this.scoreText.setText("Great");
			this.button.feedback = 'Great';
			game.time.events.add(Phaser.Timer.SECOND * 1, this.killText, this);
			this.kill();

		}else if(Math.abs(this.body.x - this.button.body.x) < 50){
			this.killText();
			this.scoreText.setText("Good");
			this.button.feedback = 'Great';
			game.time.events.add(Phaser.Timer.SECOND * 1, this.killText, this);
			this.kill();
		}else if(Math.abs(this.body.x - this.button.body.x) < 90){
			this.killText();
			this.scoreText.setText("Bad");
			this.button.feedback = 'Bad';
			game.time.events.add(Phaser.Timer.SECOND * 1, this.killText, this);
			this.kill();
		}else if (this.button.body.x - this.body.x > 90 && !this.isKilled){
				this.killText();
				this.scoreText.setText("Miss");
				game.time.events.add(Phaser.Timer.SECOND * 1, this.killText, this);
				this.kill();
		}
	}else if (this.button.body.x - this.body.x > 90 && !this.isKilled){ // it occasionally enters this twice. Not quite sure why.
			this.killText();
			this.scoreText.setText("Miss");
			//console.log("draxed");
			this.button.feedback = 'Bad';
			game.time.events.add(Phaser.Timer.SECOND * 1, this.killText, this);
			this.kill();

	}
}

Bit.prototype.killText = function(){
	this.scoreText.setText('',true);
	this.button.feedback = '';
	this.isKilled = true;
}