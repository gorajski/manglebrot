const SWING_PERCENT = 0.05

let ViewFrame = function(left, right, bottom, top, width, height) {
	this.top = top
	this.bottom = bottom
	this.left = left
	this.right = right
	this.width = width
	this.height = height

	this.stepX = (this.right - this.left) / width
	this.stepY = (this.top - this.bottom) / height
}

ViewFrame.prototype.stepDown = function() {
	let range = this.top - this.bottom
	this.top += SWING_PERCENT * range
	this.bottom += SWING_PERCENT * range
}

ViewFrame.prototype.stepUp = function() {
	let range = this.top - this.bottom
	this.top -= SWING_PERCENT * range
	this.bottom -= SWING_PERCENT * range
}

ViewFrame.prototype.stepLeft = function() {
	let range = this.right - this.left
	this.right += SWING_PERCENT * range
	this.left += SWING_PERCENT * range
}

ViewFrame.prototype.stepRight = function() {
	let range = this.right - this.left
	this.right -= SWING_PERCENT * range
	this.left -= SWING_PERCENT * range
}