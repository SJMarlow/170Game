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
	offset: 205,
}
maps[1] = { // I believe that Guanchen found this, so I added it in as well.
	song: '90bpmTutorial',
	songLocation: './assets/test2.json', 
	notes: [],
	bpm: 360, // because it has 8th notes, I doubled the bpm. Don't have an implementation that handles that automatically yet :/
	offset: 130, // not the most fun thing to find...
}
maps[2] = {
	song: 'Cassetter_-_Neon_Towers_-_Cut',
	songLocation: './assets/Tutorial.json', 
	notes: [],
	bpm: 232, // because it has 8th notes, I doubled the bpm. Don't have an implementation that handles that automatically yet :/
	offset: 92+350, // still not the most fun thing to find... and something keeps making it change
}
maps[3] = { // I believe that Guanchen found this, so I added it in as well.
	song: 'The_Goondock_Saint_-_A_hole_in_the_sky_-_Cut',
	songLocation: './assets/MainGame.json', 
	notes: [],
	bpm: 188, // 
	offset: 170+610, // why...
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
