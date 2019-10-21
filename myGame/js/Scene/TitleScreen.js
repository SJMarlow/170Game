var TitleScreen = function(game) {};
TitleScreen.prototype = {
	preload: function() {
		game.load.image('rightArrow', 'rightArrow.png');
		game.load.image('leftArrow', 'leftArrow.png');
		game.load.image('downArrow', 'downArrow.png');
		game.load.image('sheet', 'sheet.png');
		game.load.spritesheet('guitar', 'guitarCharacter.png', 1200,1600);
		
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