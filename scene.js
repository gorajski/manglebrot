let Scene = function(canvas) {
	this.c = canvas.getContext('2d')
	this.innerWidth = canvas.width
	this.innerHeight = canvas.height
	this.x = canvas.width / 2
	this.y = canvas.height / 2
}

Scene.prototype.draw = function() {
	let z = new Complex(
		1.4*Math.random()-0.7,		// 0 for standard Mandelbrot
		1.4*Math.random()-0.7,		// 0 for standard Mandelbrot
		this.x, 
		this.y
	)

	this.drawMandelbrot(z)
	this.drawSeed(z)
	this.drawAxes()
}

Scene.prototype.drawMandelbrot = function(z) {
	
	for (let i = -this.x; i < this.x; i += 1) {
		for (let j = -this.y; j < this.y; j += 1) {

			let cc = new Complex(i/250, j/250, this.x, this.y)
			cc.draw(this.c, cc.isInMandelbrotSet(0, z), 1)

		} 
	}

}

Scene.prototype.drawSeed = function(z) {
	z.draw(this.c, "#000000", 12)
	z.draw(this.c, "#ffddff", 10)
}

Scene.prototype.drawAxes = function() {
	this.c.fillStyle = "#ff4444"
	this.c.fillRect(this.x, 0, 1, this.innerHeight)
	this.c.fillRect(0, this.y, this.innerWidth, 1)
}