let RedBluePainter = function() {}

RedBluePainter.prototype.getColor = function(x,y) {
	let red = Math.floor(255 * x/this.sceneWidth)
	let green = Math.floor(255 * x*y / (2*this.sceneWidth*this.sceneHeight))
	let blue = Math.floor(255 * y/this.sceneHeight)

	color = `rgb(${red}, ${green}, ${blue})`
}