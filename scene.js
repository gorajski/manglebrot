let Scene = function(canvas) {
	this.c = canvas.getContext('2d')
	this.innerWidth = canvas.width
	this.innerHeight = canvas.height
	this.x = canvas.width / 2
	this.y = canvas.height / 2
}

Scene.prototype.draw = function() {

	for (let i = -this.x; i < this.x; i += 1) {
		for (let j = -this.y; j < this.y; j += 1) {

		let z = new Complex(0, 0, this.x, this.y)
		let cc = new Complex(i/300, j/300, this.x, this.y)
			
			if (this.isInMandelbrot(0, z, cc)) {
				cc.draw(this.c)
			}

		} 
	}

	this.c.fillRect(this.x, 0, 1, this.innerHeight)
	this.c.fillRect(0, this.y, this.innerWidth, 1)

	console.log("DONE!!")
}

Scene.prototype.isInMandelbrot = function(count, z, cc) {
	if (z.mag > 2) { return false }
	if (count > 500) { return true }
	return this.isInMandelbrot(count+=1, z.squared().add(cc), cc)
}


