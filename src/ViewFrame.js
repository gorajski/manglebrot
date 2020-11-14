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

