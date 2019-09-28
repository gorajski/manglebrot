let Complex = function(real, img, originX, originY) {
	this.real = real
	this.img = img
	this.x = originX
	this.y = originY
	this.mag = (this.real**2 + this.img**2) ** 0.5
}

Complex.prototype.squared = function() {
	return new Complex(this.real**2-this.img**2, 2*this.real*this.img, this.x, this.y)
}

Complex.prototype.add = function(complex) {
	return new Complex(this.real + complex.real, this.img + complex.img, this.x, this.y)
}

Complex.prototype.draw = function(context, color, size) {
	context.fillStyle = color
	context.fillRect(300*this.real + this.x, 300*this.img + this.y, size, size)
}

Complex.prototype.isInMandelbrot = function(count, z) {
	if (z.mag > 2) { 
		let red = (255*Math.tan((2*Math.PI*count/15)))
		let green = (255*Math.tan((2*Math.PI*count/15)-Math.PI/4))
		let blue = (255*Math.tan((2*Math.PI*count/15)+Math.PI/4))
		return `rgb(${red}, ${green}, ${blue})`
	}
	if (count > 100) { return "#000000" }
	return this.isInMandelbrot(count+=1, z.squared().add(this))
}

