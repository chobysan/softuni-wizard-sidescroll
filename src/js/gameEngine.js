function start(state, game) {
    window.requestAnimationFrame(gameLoop.bind(null, state, game));

}

function gameLoop() {
    console.log('frame');
	window.requestAnimationFrame(gameLoop.bind(null, state, game));

}