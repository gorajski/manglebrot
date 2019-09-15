let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

// c.fillStyle = 'rgba(0, 0, 255, 0.7)'
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(100, 300, 255, 0.7)'
// c.fillRect(400, 100, 200, 500);
// c.fillRect(100, 300, 100, 350);

// c.beginPath();
// c.moveTo(50, 200);
// c.lineTo(50, 50);
// c.lineTo(500, 200);
// c.strokeStyle = "#fae38a"
// c.stroke();

// for (let i = 0; i < 200; i++) {
// 	let x = window.innerWidth * Math.random();
// 	let y = window.innerHeight * Math.random();

// 	c.beginPath();
// 	c.arc(x, y, 30, 0, Math.PI * 2, false);
// 	c.strokeStyle = 'blue';
// 	c.stroke();
// }

// let x = Math.random() * window.innerWidth;
// let dx = 10 * (Math.random() - 0.5);
// let y = Math.random() * window.innerHeight;
// let dy = 10 * (Math.random() - 0.5);
// let radius = 30



let circleArray = [];

for (let i = 0; i < 400; i++) {
	let radius = 30
	let rand = Math.random()
	console.log(rand)
	let x = 0.5 * ((window.innerWidth - radius * 2) + radius)
	let y = (Math.random() * (window.innerHeight - radius * 2) + radius) / 6 + ( 4/5 * window.innerHeight )
	let dx = 5 * (Math.random() - 0.5);
	let dy = 5 * (Math.random() - 0.5);

	circleArray.push(new Circle(x, y, dx, dy, radius))

}





function animate() {
	requestAnimationFrame(animate)
	c.clearRect(0, 0, innerWidth, innerHeight);
	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update()
	}
}

animate();