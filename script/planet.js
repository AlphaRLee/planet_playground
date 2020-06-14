class Planet {
	constructor({ pos, speed, mass, radius, mobile, color, strokeColor }) {
		this.pos = pos;
		this.speed = speed || createVector(0, 0);
		this.mass = mass || 800;
		this.radius = radius || 10;
		this.mobile = mobile == null || mobile == undefined ? true : mobile;
		this.color = color || Planet.randomBrightColor();
		this.strokeColor =
			strokeColor || Planet.calculateStrokeColor(this.color);
		this.trail = [];
	}

	/**
	 * Return a random HSL color that is considered "bright"
	 */
	static randomBrightColor = () => {
		return color(
			Math.floor(Math.random() * 360),
			Math.floor(Math.random() * 25) + 75,
			Math.floor(Math.random() * 25) + 75
		);
	};

	static calculateStrokeColor = (bodyColor) => {
		return color(
			hue(bodyColor),
			saturation(bodyColor) * 0.75,
			brightness(bodyColor)
		);
	};

	draw() {
		stroke(this.strokeColor);

		this.trail.slice(0, -1).forEach((point1, i) => {
			const point2 = this.trail[i + 1];
			line(point1.x, point1.y, point2.x, point2.y);
		});

		fill(this.color);
		circle(this.pos.x, this.pos.y, 2 * this.radius);
	}

	move = (speed) => {
		this.trail.push(this.pos.copy());
		if (this.trail.length > 1000) {
			this.trail.shift();
		}

		this.pos.add(speed);
	};
}
