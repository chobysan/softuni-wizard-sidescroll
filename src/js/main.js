let state = initState();
let game = initObject();

const availableKeys = ['KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space'];

document.addEventListener('keydown', (e) => {
    if(availableKeys.includes(e.code)) {
	state.keys[e.code] = true;
    }
});

document.addEventListener('keyup', (e) => {
    if(availableKeys.includes(e.code)) {
	state.keys[e.code] = false;
    }
});

game.startScreen.addEventListener('click', (e) => {
	game.startScreen.classList.add('hidden');
	game.gameScreen.classList.remove('hidden');

	//start game
	start(state, game);
});
