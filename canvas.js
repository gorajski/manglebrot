let canvas = document.querySelector('canvas')

canvas.width = innerWidth;
canvas.height = innerHeight;

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
let scene = new Scene(canvas)
	
function drawFrame() {
	let c = canvas.getContext('2d')
	c.clearRect(0, 0, innerWidth, innerHeight)
	scene.draw()	
}