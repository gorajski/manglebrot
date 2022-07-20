const RESOLUTION = 120

let Scene = function(canvas, frame) {
	this.context = canvas.getContext('2d')
	this.width = canvas.width
	this.height = canvas.height
	
	this.frame = frame
}

Scene.prototype.calculateSceneCoordinate = function(x, y) {
	percentX = (x - this.frame.left) / (this.frame.right - this.frame.left)
	percentY = (this.frame.top - y) / (this.frame.top - this.frame.bottom)

	return {
		x: percentX * this.width,
		y: percentY * this.height
	}
}

Scene.prototype.draw = function() {
	this.drawPlot()
	this.drawAxes()
}

Scene.prototype.initializeData = function () {
	let data = {}

	let z = new Complex(
		1.4*Math.random()-0.7,		// 0 for standard Mandelbrot
		1.4*Math.random()-0.7		// 0 for standard Mandelbrot
		// 0,0
	)

	data.z = z

	return data;
}

Scene.prototype.plotEachPixel = function(callback, data) {
	for (let i = 0; i < this.width; i += 1) {
		for (let j = 0; j < this.height; j += 1) {
			let color = callback.call(this, i, j, data)
			this.context.fillStyle = color
			this.context.fillRect(i, j, 1, 1)
		}
	}
}

Scene.prototype.drawRectangleBasedObjects = function(callback, data) {
	callback.call(this, data)
}


Scene.prototype.mandelbrot = function(i, j, data) {
	let x = this.frame.left + this.frame.stepX * i
	let y = this.frame.top - this.frame.stepY * j

	let plotter = new MandelbrotPlotter()
	let cVar = new Complex(x, y)
	let color = plotter.computeColor(data.z, cVar, 0)
	return color
}

Scene.prototype.mandelbrotSeed = function(data) {
	this.context.fillStyle = "#0000ff"
	let seed = this.calculateSceneCoordinate(data.z.real, data.z.img)
	this.context.fillRect(seed.x, seed.y, 4, 4)
}

Scene.prototype.colorTest = function(i, j, data) {
	let red = Math.floor(255 * i / this.width)
	let green = Math.floor(255 * i * j / (2 * this.width * this.height))
	let blue = Math.floor(255 * j / this.height)

	color = `rgb(${red}, ${green}, ${blue})`
	return color
}

Scene.prototype.graphingCalculator = function(i, j, data) {
	let x = this.frame.left + this.frame.stepX * i
	let y = this.frame.top - this.frame.stepY * j

	let f = function(x0) {
		return 0.2*Math.sin(9*x0)/x0
	}
	color = "rgb(0,0,0)"
	if (y >= f(x) && y < f(x) + this.frame.stepY) {
		color = "rgb(255,255,255)"
	}
	return color
}

// Extract to class?
Scene.prototype.drawPlot = function() {
	let color = "rgb(0,0,0)"

	let data = this.initializeData()

	// MANDELBROT
	this.plotEachPixel(this.mandelbrot, data)

	// COLOR TEST
	// this.plotEachPixel(this.colorTest, data)

	// GRAPHING CALCULATOR
	// this.plotEachPixel(this.graphingCalculator, data)

	this.drawRectangleBasedObjects(this.mandelbrotSeed, data)

}

// Extract to class?
Scene.prototype.drawAxes = function() {
	this.context.fillStyle = "#44ff44"

	let origin = this.calculateSceneCoordinate(this.frame.originX, this.frame.originY)

	function drawVerticalAxis() {
		this.context.fillRect(origin.x, 0, 1, this.height)
	}

	function drawHorizontalAxis() {
		this.context.fillRect(0, origin.y, this.width, 1)
	}

	drawVerticalAxis.call(this);
	drawHorizontalAxis.call(this);
}
