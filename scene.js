const RESOLUTION = 200

let Scene = function(canvas) {
	this.c = canvas.getContext('2d')
	this.innerWidth = canvas.width
	this.innerHeight = canvas.height
	this.x = canvas.width / 2
	this.y = canvas.height / 2
}

Scene.prototype.draw = function() {
	let zVar = new Complex(
		1.4*Math.random()-0.7,		// 0 for standard Mandelbrot
		1.4*Math.random()-0.7,		// 0 for standard Mandelbrot
		this.x, 
		this.y
	)

	this.drawMandelbrot(zVar)
	this.drawSeed(zVar)
	this.drawAxes()
}

Scene.prototype.drawMandelbrot = function(zVar) {
	
	for (let i = -this.x; i < this.x; i += 1) {
		for (let j = -this.y; j < this.y; j += 1) {

			plot(this.c, i, j, this.x, this.y, zVar)
		} 
	}

}

let plot = function(context, x, y, originX, originY, zVar) {

	let cVar = new Complex(x/550, y/550, originX, originY)
	draw(context, cVar, computeColor(cVar, 0, zVar), 1)
}

let draw = function(context, c, color, size) {
	context.fillStyle = color
	context.fillRect(550*c.real + c.x, 550*c.img + c.y, size, size)
}

let computeColor = function(cc, count, z) {
	if (z.mag > 2) { return colorMapping(count) }
	if (count > RESOLUTION) { return "#000000" }
	return computeColor(cc, count+=1, z.squared().add(cc))
}

let colorMapping = function(count) {
	let red = 	255 * Math.tan(Math.PI * ((2*count/15)))
	let green = 255 * Math.tan(Math.PI * ((2*count/15) - 1/4))
	let blue = 	255 * Math.tan(Math.PI * ((2*count/15) + 1/4))
	return `rgb(${red}, ${green}, ${blue})`
}

Scene.prototype.drawSeed = function(z) {
	draw(this.c, z, "#000000", 12)
	draw(this.c, z, "#ffddff", 10)
}

Scene.prototype.drawAxes = function() {
	this.c.fillStyle = "#ff4444"
	this.c.fillRect(this.x, 0, 1, this.innerHeight)
	this.c.fillRect(0, this.y, this.innerWidth, 1)
}