const layouts = [
	{
		name: "Orbits",
		massToRadius: (mass) => 0.165 * Math.sqrt(mass),
		action: () => [
			{
				// Star
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
		name: "Single Star",
		massToRadius: (mass) => 0.165 * Math.sqrt(mass),
		action: () => [
			{
				// Star
				pos: createVector(windowWidth / 2, windowHeight / 2),
				mass: 60000,
				mobile: false,
				color: color(61, 99, 99),
			},
		],
	},
	{
		name: "Star and Planet",
		massToRadius: (mass) => 0.165 * Math.sqrt(mass),
		action: () => [
			{
				// Star
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
	{
		name: "Twin Suns",
		action: () => [
			{
				// Star
				pos: createVector(windowWidth / 2 - 200, windowHeight / 2),
				mass: 60000,
				mobile: false,
				color: color(61, 99, 99),
			},
			{
				// Star
				pos: createVector(windowWidth / 2 + 200, windowHeight / 2),
				mass: 60000,
				mobile: false,
				color: color(61, 99, 99),
			},
		],
	},
	{
		name: "Triple Threat",
		action: () => [
			{
				// Star
				pos: createVector(
					windowWidth / 2 + 300 * Math.cos(Math.PI / 6),
					windowHeight / 2 - 300 * Math.sin(Math.PI / 6)
				),
				mass: 50000,
				mobile: false,
				color: color(61, 99, 99),
			},
			{
				// Star
				pos: createVector(
					windowWidth / 2 + 300 * Math.cos((Math.PI * 5) / 6),
					windowHeight / 2 - 300 * Math.sin((Math.PI * 5) / 6)
				),
				mass: 50000,
				mobile: false,
				color: color(61, 99, 99),
			},
			{
				// Star
				pos: createVector(windowWidth / 2, windowHeight / 2 + 300),
				mass: 50000,
				mobile: false,
				color: color(61, 99, 99),
			},
		],
	},
	{
		name: "Li'l Skipper",
		action: () => [
			{
				// Star
				pos: createVector(windowWidth / 2, windowHeight / 2),
				mass: 40000,
				mobile: false,
				color: color(61, 99, 99),
			},
			{
				pos: createVector(windowWidth / 2 + 400, windowHeight / 2),
				speed: createVector(0, 400),
				mass: 20000,
			},
			{
				pos: createVector(windowWidth / 2 + 350, windowHeight / 2),
				speed: createVector(5.1, 0),
				mass: 500,
			},
		],
	},
	{
		name: "The Void",
		action: () => [],
	},
];
