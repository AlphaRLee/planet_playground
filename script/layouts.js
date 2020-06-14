class Layouts {
	static getFixedStarLayout = () => ({
		massToRadius: (mass) => 0.165 * Math.sqrt(mass),
		planets: [
			{
				// Star
				pos: createVector(400, 400),
				mass: 60000,
				mobile: false,
				color: color(61, 99, 99),
			},
			{
				pos: createVector(400, 150),
				speed: createVector(400, 0),
				mass: 8000,
			},
			{
				pos: createVector(400, 650),
				speed: createVector(-400, 0),
				mass: 8000,
			},
		],
	});

	static getBinaryLayout = () => [
		{
			pos: createVector(200, 400),
			speed: createVector(0, -200),
			mass: 26000,
			radius: 25,
		},
		{
			pos: createVector(600, 400),
			speed: createVector(0, 200),
			mass: 26000,
			radius: 25,
		},
	];
}
