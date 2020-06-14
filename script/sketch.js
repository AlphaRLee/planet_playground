let planets = [];
let newPlanet = undefined;
let newPlanetMass = 1000;

let massToRadius = (mass) => 0.165 * Math.sqrt(mass);

function setup() {
	let canvas = createCanvas(windowWidth, Math.min(windowHeight, 800), P2D);
	canvas.parent("canvas-parent");
	colorMode(HSB, 360, 100, 100);

	setupPlanets();
}

function setupPlanets() {
	const layout = Layouts.getFixedStarLayout();
	massToRadius = layout.massToRadius || massToRadius;
	planets = layout.planets.map(
		(planetSettings) =>
			new Planet({
				...planetSettings,
				radius: massToRadius(planetSettings.mass),
			})
	);
}

function draw() {
	background(0);

	for (let i = 0; i < STEPS_PER_FRAME; i++) {
		applyForces(planets, TIME_STEP);
		movePlanets(planets, TIME_STEP);
	}

	drawPlanets(planets);

	if (newPlanet) {
		drawNewPlanet(newPlanet);
	}
}

function applyForces(planets, timeStep) {
	for (let i = 0; i < planets.length - 1; i++) {
		for (let j = planets.length - 1; j > i; j--) {
			const planet1 = planets[i];
			const planet2 = planets[j];
			applyForce(planet1, planet2, timeStep);

			if (hasCollided(planet1, planet2)) {
				applyCollision(planet1, planet2);
				planets.splice(j, 1);
			}
		}
	}
}

function applyForce(planet1, planet2, timeStep) {
	if (!planet1.mobile && !planet2.mobile) {
		return;
	}

	const p1ToP2 = pos1ToPos2(planet1, planet2);
	let gravityForceMag =
		(GRAVITY_CONSTANT * planet1.mass * planet2.mass) / p1ToP2.magSq();

	const p1ToP2Direction = p1ToP2.copy().normalize();

	// Double force of gravity if one planet is stationary
	if (!planet1.mobile || !planet2.mobile) {
		gravityForceMag *= 2;
	}

	const gravityForce = p1ToP2Direction.copy().mult(gravityForceMag);

	if (planet1.mobile) {
		planet1.speed.add(gravityForce.copy().mult(timeStep));
	}
	if (planet2.mobile) {
		planet2.speed.sub(gravityForce.copy().mult(timeStep));
	}
}

function hasCollided(planet1, planet2) {
	return (
		pos1ToPos2(planet1, planet2).magSq() <=
		Math.pow(planet1.radius + planet2.radius, 2)
	);
}

function applyCollision(planet1, planet2) {
	const totalMass = planet1.mass + planet2.mass;

	// Weighted averages calculations
	const planet1Weight = planet1.mass / totalMass;
	const planet2Weight = 1 - planet1Weight;

	// Set position to be inverted weighted average
	planet1.pos.lerp(planet2.pos, planet2Weight);

	// Set velocity to be the weighted average
	planet1.speed
		.mult(planet1Weight)
		.add(planet2.speed.copy().mult(planet2Weight));

	planet1.mass = totalMass;
	planet1.radius = massToRadius(totalMass);

	if (!planet1.mobile || !planet2.mobile) {
		planet1.mobile = false;
	}
}

function movePlanets(planets, timeStep) {
	planets.forEach((planet) => {
		if (planet.mobile) {
			planet.move(planet.speed.copy().mult(timeStep));
		}
	});
}

function drawPlanets(planets) {
	planets.forEach((planet) => planet.draw());
}

function pos1ToPos2(planet1, planet2) {
	return p5.Vector.sub(planet2.pos, planet1.pos);
}

function drawNewPlanet(newPlanet) {
	const newX = newPlanet.pos.x;
	const newY = newPlanet.pos.y;
	const vX = (newX - mouseX) * NEW_PLANET_SPEED_SCALE;
	const vY = (newY - mouseY) * NEW_PLANET_SPEED_SCALE;

	stroke(newPlanet.strokeColor);
	fill(newPlanet.color);

	line(newX, newY, newX + vX, newY + vY);
	circle(newX, newY, 2 * newPlanet.radius);
}

function mousePressed() {
	if (mouseButton != LEFT) {
		return;
	}

	newPlanet = new Planet({
		pos: createVector(mouseX, mouseY),
		mass: newPlanetMass,
		radius: massToRadius(newPlanetMass),
	});
	return false;
}

function mouseReleased() {
	newPlanet.speed = newPlanet.pos
		.copy()
		.sub(createVector(mouseX, mouseY))
		.mult(NEW_PLANET_SPEED_SCALE);

	planets.push(newPlanet);
	newPlanet = undefined;
	return false;
}

function keyPressed() {
	switch (key) {
		case "r":
			reset();
			break;
	}
}

function reset() {
	setupPlanets();
}
