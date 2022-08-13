let MandelbrotPlotter = function() {}

MandelbrotPlotter.prototype.computeColor = function(zVar, cVar, count) {
	if (zVar.mag > 2) { return colorMapping(count) }
	if (count > RESOLUTION) { return {red: 0, green: 0, blue: 0} }
	return this.computeColor(zVar.squared().add(cVar), cVar, count+=1)
}

let colorMapping = function(count) {
	let red   = 255 * Math.tan(Math.PI * ((2*count/15)))
	let green = 255 * Math.tan(Math.PI * ((2*count/15) - 1/4))
	let blue  =	255 * Math.tan(Math.PI * ((2*count/15) + 1/4))
	return {red: red, green: green, blue: blue}
}