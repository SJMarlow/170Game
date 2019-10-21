function Character(game, x, y, key, frame, button) {
	Phaser.Sprite.call(this, game, x, y, key, frame);
	this.anchor.set(0.5);
	game.physics.enable(this);
	this.scale.x = 0.15;
	this.scale.y = 0.15;
	this.button = button;
	this.animations.add('stand', [0, 1], 2, true);
	this.animations.add('great', [3, 4], 2, true);
	this.animations.add('bad', [2, 5], 2, true);

}

Character.prototype = Object.create(Phaser.Sprite.prototype);
Character.prototype.constructor = Character;

Character.prototype.update = function(){
	if(this.button.feedback == 'Great'){
		this.animations.play('great');
	}else if(this.button.feedback == 'Bad'){
		this.animations.play('bad');
	}else{
		this.animations.play('stand');
	}
}