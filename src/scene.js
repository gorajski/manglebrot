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
	let zVar = new Complex(
		// 1.4*Math.random()-0.7,		// 0 for standard Mandelbrot
		// 1.4*Math.random()-0.7		// 0 for standard Mandelbrot
		0,0
	)

	this.drawPlot(zVar, this.frame)
	this.drawSeed(zVar)
	this.drawAxes()
}

let f = function(x) {
	return 0.2*Math.sin(9*x)/x
}

Scene.prototype.drawPlot = function(zVar) {
	
	let plotter = new MandelbrotPlotter()

	for (let i = 0; i < this.width; i += 1) {
		for (let j = 0; j < this.height; j += 1) {
			let x = this.frame.left + this.frame.stepX * i
			let y = -(this.frame.bottom + this.frame.stepY * j)
			
			// let cVar = new Complex(x, y)

			// let color = plotter.computeColor(zVar, cVar, 0)

			// let red = Math.floor(255 * i/this.sceneWidth)
			// let green = Math.floor(255 * i*j / (2*this.sceneWidth*this.sceneHeight))
			// let blue = Math.floor(255 * j/this.sceneHeight)

			// color = `rgb(${red}, ${green}, ${blue})`

			let color = "rgb(0,0,0)"
			if (y >= f(x) && y < f(x) + this.frame.stepY) {
				color = "rgb(255,255,255)" 
			}

			this.context.fillStyle = color
			this.context.fillRect(i, j, 1, 1)

			// if (x === this.frame.originX || y === this.frame.originY) {
			// 	color = "rgb(255,0,0)"
			// 	this.context.fillStyle = color
			// 	this.context.fillRect(i, j, 1, 1)
			// }
		} 
	}
}

Scene.prototype.drawSeed = function(z) {
	this.context.fillStyle = "#eeddff"
	this.context.fillRect(550*z.real + this.originX, 550*z.img + this.originY, 4, 4)
}

Scene.prototype.drawAxes = function() {
	this.context.fillStyle = "#44ff44"

	let origin = this.calculateSceneCoordinate(this.frame.originX, this.frame.originY)

	this.context.fillRect(origin.x, 0, 1, this.height)  // vertical axis
	this.context.fillRect(0, origin.y, this.width, 1)  // horizontal axis
}

