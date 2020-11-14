let Complex = function(real, img) {
	this.real = real
	this.img = img
	this.mag = (this.real**2 + this.img**2) ** 0.5
}

Complex.prototype.squared = function() {
	return new Complex(this.real**2-this.img**2, 2*this.real*this.img)
}

Complex.prototype.add = function(complex) {
	return new Complex(this.real + complex.real, this.img + complex.img)
}