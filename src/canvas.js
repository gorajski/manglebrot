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

	const LEFT = 37, RIGHT = 39, UP = 38, DOWN = 40
	if (e.keyCode === DOWN) {
		frame.shiftDown(0.05)
	} else if (e.keyCode === UP) {
		frame.shiftUp(0.05)
	} else if (e.keyCode === LEFT) {
		frame.shiftLeft(0.05)
	} else if (e.keyCode === RIGHT) {
		frame.shiftRight(0.05)
	}

	drawFrame()
}, false)

requestAnimationFrame(drawFrame)
	
function drawFrame() {
	let c = canvas.getContext('2d')
	c.clearRect(0, 0, innerWidth, innerHeight)

	let scene = new Scene(canvas, frame)
	scene.draw()
}
