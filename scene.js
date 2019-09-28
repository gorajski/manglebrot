let Scene = function(canvas) {
	this.c = canvas.getContext('2d')
	this.innerWidth = canvas.width
	this.innerHeight = canvas.height
	this.x = canvas.width / 2
	this.y = canvas.height / 2
}

Scene.prototype.draw = function() {
	this.drawMandelbrot()
	this.drawAxes()
}

Scene.prototype.drawMandelbrot = function() {
	let z = new Complex(0.8*Math.random()-0.4, 0.8*Math.random()-0.4, this.x, this.y)
	
	for (let i = -this.x; i < this.x; i += 1) {
		for (let j = -this.y; j < this.y; j += 1) {

		let cc = new Complex(i/300, j/300, this.x, this.y)
			
		if (cc.isInMandelbrot(0, z)) {
			cc.draw(this.c, "#2211cc")
		}

		} 
	}
}

Scene.prototype.drawAxes = function() {
	this.c.fillStyle = "#ff4444"
	this.c.fillRect(this.x, 0, 1, this.innerHeight)
	this.c.fillRect(0, this.y, this.innerWidth, 1)
}