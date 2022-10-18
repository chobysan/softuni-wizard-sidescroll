function initState() {
	let starX = Math.floor(Math.random() * 1000);
	let startY = Math.floor(Math.random() * 500);

	const state = {
		player: 'kupo klopp',
		gameOver: false,
		score: 0,
		scoreRate: 1,
		killScore: 1000,
		moogle: {
			width: 170,
			height: 221,
			posX: starX,
			posY: startY,
			speed: 10,
		},
		keys: {
			KeyA: false,
			KeyS: false,
			KeyD: false,
			KeyW: false,
			Space: false,
		},
	};
	return state;
}
