let state = initState();
let game = initObject();

game.startScreen.addEventListener('click', (e) => {
	game.startScreen.classList.add('hidden');
	game.gameScreen.classList.remove('hidden');

	start(state, game);
});
