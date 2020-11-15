const RESOLUTION = 120

let Scene = function(canvas) {
	this.context = canvas.getContext('2d')
	this.sceneWidth = canvas.width
	this.sceneHeight = canvas.height
	this.originX = canvas.width / 2
	this.originY = canvas.height / 2
}

Scene.prototype.draw = function(frame) {
	let zVar = new Complex(
		// 1.4*Math.random()-0.7,		// 0 for standard Mandelbrot
		// 1.4*Math.random()-0.7		// 0 for standard Mandelbrot
		0,0
	)

	this.drawPlot(zVar, frame)
	this.drawSeed(zVar)
	this.drawAxes()
}

let f = function(x) {
	return 0.2*Math.sin(9*x)/x
}

Scene.prototype.drawPlot = function(zVar, frame) {
	
	let plotter = new MandelbrotPlotter()
	
	for (let i = 0; i < this.sceneWidth; i += 1) {
		let color
		for (let j = 0; j < this.sceneHeight; j += 1) {
			let x = frame.left + frame.stepX * i
			let y = -frame.bottom - frame.stepY * j

			// let cVar = new Complex(x, y)

			// let color = plotter.computeColor(zVar, cVar, 0)

			// let red = Math.floor(255 * i/this.sceneWidth)
			// let green = Math.floor(255 * i*j / (2*this.sceneWidth*this.sceneHeight))
			// let blue = Math.floor(255 * j/this.sceneHeight)

			// color = `rgb(${red}, ${green}, ${blue})`

			let color = "rgb(0,0,0)"
			if (y > f(x) && 
				y < f(x) + frame.stepY) 
				{ color = "rgb(255,255,255)" }

			this.context.fillStyle = color
			this.context.fillRect(i, j, 1, 1)
		} 
	}
}

Scene.prototype.drawSeed = function(z) {
	this.context.fillStyle = "#000000"
	this.context.fillRect(550*z.real + this.originX, 550*z.img + this.originY, 12, 12)
	this.context.fillStyle = "#eeddff"
	this.context.fillRect(550*z.real + this.originX, 550*z.img + this.originY, 10, 10)
}

Scene.prototype.drawAxes = function() {
	this.context.fillStyle = "#ff4444"
	this.context.fillRect(this.originX, 0, 1, this.sceneHeight)
	this.context.fillRect(0, this.originY, this.sceneWidth, 1)
}

