function start(state, game) {
	game.createWizard(state.wizard);

	window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game) {
	const { wizard } = state;
	const { wizardElement } = game;
	// move wizard
	if (state.keys.keyW && wizard.posX > 0) {
		wizard.posX -= wizard.speed;
	}
	if (state.keys.keyA) {
		wizard.posX -= Math.max(wizard.posY - wizard.speed, 0);
	}
	if (state.keys.keyS) {
		wizard.posX = Math.min(
			wizard.posY + wizard.speed,
			game.gameScreen.offsetHeight - wizard.height
		);
	}
	if (state.keys.keyD) {
		wizard.posX = Math.max(
			wizard.posY + wizard.speed,
			game.gameScreen.offsetHeight - wizard.height
		);
	}
	wizardElement.style.left = wizard.posX + 'px';
	wizardElement.style.top = wizard.posY + 'px';

	window.requestAnimationFrame(gameLoop.bind(null, state, game));
}
