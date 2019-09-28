let Scene = function(canvas) {
	this.c = canvas.getContext('2d')
	this.innerWidth = canvas.width
	this.innerHeight = canvas.height
	this.x = canvas.width / 2
	this.y = canvas.height / 2
}

Scene.prototype.draw = function() {

	for (let i = -this.x; i < this.x; i += 4) {
		for (let j = -this.y; j < this.y; j += 4) {

		let z = new Complex(0, 0, this.x, this.y)
		let cc = new Complex((i-100)/333, j/333, this.x, this.y)
			
			if (this.isInMandelbrot(0, z, cc)) {
				cc.draw(this.c)
				// console.log(cc.real, cc.img)
			}

			// if (i**2 + j**2 < 111111) {
			// 	this.c.fillStyle = "#ff4444"
			// 	this.c.fillRect(i + this.x, j + this.y, boxSize, boxSize) 
			// }


		} 
	}

	this.c.fillRect(this.x, 0, 1, this.innerHeight)
	this.c.fillRect(0, this.y, this.innerWidth, 1)

	console.log("DONE!!")

	// v.draw(this.c)
	// v.squared().draw(this.c)
	// v.squared().squared().draw(this.c)
	// v.squared().squared().squared().draw(this.c)
	// v.squared().squared().squared().squared().draw(this.c)
	
	
	// for (let i = 0; i < innerWidth - boxSize; i += boxSize) {
	// 	for (let j = 0; j < innerHeight - boxSize; j += boxSize) {
	// 		this.c.fillStyle = "#3333ff"
	// 		if (4*(i + j) % 2 === 0) {
	// 			this.c.fillRect(i, j, boxSize, boxSize) 	
	// 		} 
	// 	}

	// }


}

Scene.prototype.isInMandelbrot = function(count, z, cc) {
	if (z.mag > 2) { return false }
	if (count > 50) { return true }
	return this.isInMandelbrot(count+=1, z.squared().add(cc), cc)
}


