describe("plotter", function() {
	it("takes a function f(x,y) and uses it to color all the pixels in a new ImageData object", function() {
		let screenWidth = 1551
		let screenHeight = 894
		let plotter = new Plotter(screenWidth, screenHeight)

		let f = (x) => (x % 3 === 0) ? `rgba(255,255,255,1)` : `rgba(0,0,0,1)`

		let result = plotter.plot(f)

		expect(result[0]) .toBe(255)
		expect(result[1]) .toBe(255)
		expect(result[2]) .toBe(255)
		expect(result[3]) .toBe(1)
		expect(result[4]) .toBe(0)
		expect(result[5]) .toBe(0)
		expect(result[6]) .toBe(0)
		expect(result[7]) .toBe(0)
		expect(result[8]) .toBe(0)
		expect(result[9]) .toBe(0)
		expect(result[10]).toBe(0)
		expect(result[11]).toBe(0)
		expect(result[12]).toBe(255)
		expect(result[13]).toBe(255)
		expect(result[14]).toBe(255)
		expect(result[15]).toBe(1)
	})
})