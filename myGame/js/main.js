var config = {
    width: 800,
    height: 600,
    renderer: Phaser.AUTO,
    antialias: false,
	hitsound: false,
	songNum:0 // Change to 0 or 1.
}
// I can clean this up more later on. 
maps = []
maps[0] = {
	song: '120bpmTutorial',
	songLocation:'./assets/test.json',
	notes: [],
	bpm: 120,
	offset: 227,
}
maps[1] = { // I believe that Guanchen found this, so I added it in as well.
	song: '90bpmTutorial',
	songLocation: './assets/test2.json', 
	notes: [],
	bpm: 180, // because it has 8th notes, I doubled the bpm. Don't have an implementation that handles that automatically yet :/
	offset: 125, // not the most fun thing to find...
}
for (let i = 0;i<maps.length;i++){
	$.getJSON(maps[i].songLocation,function(data){
		maps[i].notes = data.layers[0]
	});
}

window.onload = function() {
	game = new Phaser.Game(config);
	game.state.add('Load', Load);
	game.state.add('TitleScreen', TitleScreen); 
	game.state.add('StoryScreen1', StoryScreen1);
	game.state.add('TutorialGameplay', TutorialGameplay);
	game.state.add('StoryScreen2', StoryScreen2);
	game.state.add('MainGameplay', MainGameplay);
	game.state.add('EndScreen', EndScreen);
	game.state.start('Load');
}
