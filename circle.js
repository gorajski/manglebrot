function Circle(x, y, dx, dy, radius) {
	this.x = x
	this.y = y
	this.dx = dx
	this.dy = dy
	this.radius = radius

	this.draw = function() {
		c.beginPath()
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
		c.fillStyle = 'rgba(80, 80,' + 255 * Math.random() + ', 0.9)'
		// c.fillStyle = 'rgba(80, 80, 255, 0.7)'
		// c.strokeStyle = 'blue'
		c.fill()
	}

	this.update = function() {

		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx
		}

		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy
		}

		this.x += this.dx
		this.y += this.dy

		this.draw()
	}
}