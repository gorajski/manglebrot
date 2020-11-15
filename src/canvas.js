const LEFT = 37, RIGHT = 39, UP = 38, DOWN = 40

let canvas = document.querySelector('canvas')

canvas.width = Number(innerWidth);
canvas.height = Number(innerHeight);

let frame = new ViewFrame(-2.5, 2.5, -2.5, 2.5, canvas.width, canvas.height)

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

window.addEventListener("keydown", (e) => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	if (e.keyCode == DOWN) {
		frame.stepDown()
	} else if (e.keyCode == UP) {
		frame.stepUp()
	} else if (e.keyCode == LEFT) {
		frame.stepLeft()
	} else if (e.keyCode == RIGHT) {
		frame.stepRight()
	}

	drawFrame()
}, false)

requestAnimationFrame(drawFrame)
	
function drawFrame() {
	let c = canvas.getContext('2d')
	c.clearRect(0, 0, innerWidth, innerHeight)

	let scene = new Scene(canvas)
	scene.draw(frame)
}
