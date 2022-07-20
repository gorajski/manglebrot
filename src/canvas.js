let canvas = document.querySelector('canvas')
canvas.width = Number(innerWidth);
canvas.height = Number(innerHeight);

let frame = new ViewFrame(-5, 5, -5, 5, canvas.width, canvas.height)

requestAnimationFrame(drawScene)

function drawScene() {
	let c = canvas.getContext('2d')
	c.clearRect(0, 0, innerWidth, innerHeight)  // needed?

	frame.updateStepSizes(canvas.width, canvas.height)

	let scene = new Scene(canvas, frame)
	scene.draw()
}

window.addEventListener('resize', () => {
	canvas.width = Number(innerWidth);
	canvas.height = Number(innerHeight);

	drawScene()
})

window.addEventListener('mousedown', () => {
	canvas.width = Number(innerWidth);
	canvas.height = Number(innerHeight);

	drawScene()
})

window.addEventListener("keydown", (e) => {
	canvas.width = Number(innerWidth);
	canvas.height = Number(innerHeight);

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

	drawScene()
}, false)
