function initObject(params) {
	const startScreen = document.querySelector('.start-screen');
	const gameScreen = document.querySelector('.game-screen');
	const scoreScreen = document.querySelector('.score');

	return {
		startScreen,
		gameScreen,
		scoreScreen,

		createMoogle(initialState) {
			let moogleElement = document.createElement('div');
			moogleElement.classList.add('moogle');

			moogleElement.style.width = initialState.width + 'px';
			moogleElement.style.height = initialState.height + 'px';

			moogleElement.style.left = initialState.poxX + 'px';
			moogleElement.style.top = initialState.posY + 'px';

			this.moogleElement = moogleElement;

			gameScreen.appendChild(moogleElement);

			return moogleElement;
		},
	};
}
