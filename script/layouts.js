const layouts = [
	{
		name: "Single Star",
		massToRadius: (mass) => 0.165 * Math.sqrt(mass),
		action: () => [
			{
				// Star
				// pos: createVector(400, 400),
				pos: createVector(windowWidth / 2, windowHeight / 2),
				mass: 60000,
				mobile: false,
				color: color(61, 99, 99),
			},
			{
				pos: createVector(windowWidth / 2, windowHeight / 2 - 250),
				speed: createVector(400, 0),
				mass: 8000,
			},
			{
				pos: createVector(windowWidth / 2, windowHeight / 2 + 250),
				speed: createVector(-400, 0),
				mass: 8000,
			},
		],
	},
	{
		name: "Binary Planets",
		action: () => [
			{
				pos: createVector(windowWidth / 2 - 200, windowHeight / 2),
				speed: createVector(0, -200),
				mass: 26000,
				radius: 25,
			},
			{
				pos: createVector(windowWidth / 2 + 200, windowHeight / 2),
				speed: createVector(0, 200),
				mass: 26000,
				radius: 25,
			},
		],
	},
];
