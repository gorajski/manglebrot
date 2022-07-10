// The frame's job is to define a bounded plane of Euclidean space, for 
// the intention of displaying it on the screen.

let ViewFrame = function(left, right, bottom, top, horzPixelCount, vertPixelCount) {
	this.left = left
	this.right = right
	this.top = top
	this.bottom = bottom

	this.updatePixelCountsAndStepSizes(horzPixelCount, vertPixelCount)

	Object.defineProperty(this, "originX", {
		value: 0,
		writable: false,
		enumerable: true,
		configurable: true
	})
	Object.defineProperty(this, "originY", {
		value: 0,
		writable: false,
		enumerable: true,
		configurable: true
	})
}

ViewFrame.prototype.updatePixelCountsAndStepSizes = function(horzPixelCount, vertPixelCount) {
	this.horzPixelCount = horzPixelCount + (horzPixelCount%2 === 0 ? 0 : 1)
	this.vertPixelCount = vertPixelCount + (vertPixelCount%2 === 0 ? 0 : 1)

	this.stepX = (this.right - this.left) / this.horzPixelCount
	this.stepY = (this.top - this.bottom) / this.vertPixelCount
}

ViewFrame.prototype.shiftDown = function(screenPercent) {
	const range = this.top - this.bottom
	this.top += screenPercent * range
	this.bottom += screenPercent * range
}

ViewFrame.prototype.shiftUp = function(screenPercent) {
	const range = this.top - this.bottom
	this.top -= screenPercent * range
	this.bottom -= screenPercent * range
}

ViewFrame.prototype.shiftLeft = function(screenPercent) {
	const domain = this.right - this.left
	this.right -= screenPercent * domain
	this.left -= screenPercent * domain
}

ViewFrame.prototype.shiftRight = function(screenPercent) {
	const domain = this.right - this.left
	this.right += screenPercent * domain
	this.left += screenPercent * domain
}