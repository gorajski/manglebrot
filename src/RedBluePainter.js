let RedBluePainter = function() {}

RedBluePainter.prototype.getColor = function(x,y) {
	let red = Math.floor(255 * x/this.width)
	let green = Math.floor(255 * x*y / (2*this.width*this.height))
	let blue = Math.floor(255 * y/this.height)

	color = `rgb(${red}, ${green}, ${blue})`
}