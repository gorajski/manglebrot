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

Complex.prototype.draw = function(context, color) {
	context.fillStyle = color
	context.fillRect(300*this.real + this.x, 300*this.img + this.y, 1, 1)
}

Complex.prototype.isInMandelbrot = function(count, z) {
	if (z.mag > 2) { return false }
	if (count > 50) { return true }
	return this.isInMandelbrot(count+=1, z.squared().add(this))
}

