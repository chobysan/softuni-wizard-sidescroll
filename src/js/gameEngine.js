function start(state, game) {
	game.createMoogle(state.moogle);

	window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game, timestamp) {
	const { moogle } = state;
	const { moogleElement } = game;
	game.scoreScreen.textContent = `${state.score}pts.`;

	modifyPosition(state, game)

	//remder moogle
	moogleElement.style.left = moogle.posX + 'px';
	moogleElement.style.top = moogle.posY + 'px';

	// move moogle
	window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function modifyPosition(state, game) {
	const { moogle } = state;

	if (state.keys.KeyW) {
        moogle.posY = Math.max(moogle.posY - moogle.speed, 0);
    }
	if (state.keys.KeyA) {
		moogle.posX = Math.max(moogle.posX - moogle.speed, 0);
	}
	if (state.keys.KeyS) {
        moogle.posY = Math.min(moogle.posY + moogle.speed, game.gameScreen.offsetHeight - moogle.height);
	}
	if (state.keys.KeyD) {
		moogle.posX = Math.min(
			moogle.posX + moogle.speed,
			game.gameScreen.offsetWidth - moogle.width
		);
	}
}
