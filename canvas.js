let canvas = document.querySelector('canvas')

canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener('resize', () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
})

requestAnimationFrame(animate)
let scene = new Scene(canvas)
	
function animate() {
	let c = canvas.getContext('2d')
	c.clearRect(0, 0, innerWidth, innerHeight)
	scene.draw()	
}

// animate()