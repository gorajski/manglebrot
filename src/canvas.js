let canvas = document.querySelector('canvas')

canvas.width = innerWidth;
canvas.height = innerHeight;

let scene = new Scene(canvas)

window.addEventListener('resize', () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	drawFrame()
})

window.addEventListener('mousedown', () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	drawFrame()
})

requestAnimationFrame(drawFrame)
	
function drawFrame() {
	let c = canvas.getContext('2d')

	// let frame = new ViewFrame(-359.5, 359.5, -432, 432, innerWidth, innerHeight)
	let frame = new ViewFrame(-3.5, 2.5, -1.5, 1.5, innerWidth, innerHeight)
	c.clearRect(0, 0, innerWidth, innerHeight)
	let scene = new Scene(canvas)
	scene.draw(frame)	
}
