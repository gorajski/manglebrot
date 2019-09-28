const RESOLUTION = 200

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
	context.fillRect(250*this.real + this.x, 250*this.img + this.y, size, size)
}

Complex.prototype.isInMandelbrotSet = function(count, z) {
	if (z.mag > 2) { return colorMapping(count) }
	if (count > RESOLUTION) { return "#000000" }
	return this.isInMandelbrotSet(count+=1, z.squared().add(this))
}



let colorMapping = function(count) {
	let red = 	255 * Math.tan(Math.PI * ((2*count/15)))
	let green = 255 * Math.tan(Math.PI * ((2*count/15) - 1/4))
	let blue = 	255 * Math.tan(Math.PI * ((2*count/15) + 1/4))
	return `rgb(${red}, ${green}, ${blue})`
}