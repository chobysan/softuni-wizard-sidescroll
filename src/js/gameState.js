function initState() {
	let starX = Math.floor(Math.random() * 1000);
	let startY = Math.floor(Math.random() * 500);
	const state = {
		player: 'tech Jesus',
		wizard: {
			width: 82,
			height: 100,
			posX: starX,
			posY: startY,
			speed: 10,
		},
		keys: {},
	};
	return state;
}
