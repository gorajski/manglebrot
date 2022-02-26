describe("ViewFrame", function() {
  it("calculates the real step value of the next horizontal pixel (units per pixel)", function() {
    let frame = new ViewFrame(0, 10, -10, 10, 100, 40)
    // if there are 100 pixels and 10 units to cover, then 10/100 = 0.1
    expect(frame.stepX).toBe(0.1)
  })

  it("calculates the real step value of the next vertical pixel (units per pixel)", function() {
  	let frame = new ViewFrame(0, 10, -10, 10, 100, 40)
  	// if there are 40 pixels and 20 units to cover, then 20/40 = 0.5
  	expect(frame.stepY).toBe(0.5)
  })

	it("defines and locks the origin at (0,0)", function () {
		let frame = new ViewFrame(4, 513, -90, 34, 333, 8)
		expect(frame.originX).toBe(0)
		expect(frame.originY).toBe(0)

		frame.originX = 1356
		frame.originY = 48239
		expect(frame.originX).toBe(0)
		expect(frame.originY).toBe(0)
	})

  describe("shiftDown", function() {
  	it("shows more of what's above the current frame by the desiredPercentage while preserving the aspect ratio", function() {
  		const desiredPercentage = 0.05
			const frameHeight = 20
			const frameBottom = -10
  		let frame = new ViewFrame(0, 10, frameBottom, frameBottom+frameHeight, 100, 40)

			frame.shiftDown(desiredPercentage)

			expect(frame.bottom).toBe(frameBottom + frameHeight * desiredPercentage)
  		expect(frame.top).toBe(    (frameBottom + frameHeight) + frameHeight * desiredPercentage)
  		expect(frame.left).toBe(0)
  		expect(frame.right).toBe(10)
  	})
  })

  describe("shiftUp", function() {
  	it("shows more of what's below the current frame by the desiredPercentage while preserving the aspect ratio", function() {
  		const desiredPercentage = 0.05
			const frameHeight = 20
			const frameBottom = -10
			let frame = new ViewFrame(0, 10, frameBottom, frameBottom+frameHeight, 100, 40)

			frame.shiftUp(desiredPercentage)

  		expect(frame.bottom).toBe(frameBottom - frameHeight * desiredPercentage)
  		expect(frame.top).toBe(    (frameBottom + frameHeight) - frameHeight * desiredPercentage)
  		expect(frame.left).toBe(0)
  		expect(frame.right).toBe(10)
  	})
  })

  describe("shiftLeft", function() {
  	it("shows more of what's left of the current frame by the desiredPercentage while preserving the aspect ratio", function() {
  		const desiredPercentage = 0.05
			const frameWidth = 10
			const frameLeft = 0
			let frame = new ViewFrame(frameLeft, frameLeft+frameWidth, -10, 10, 100, 40)

  		frame.shiftLeft(desiredPercentage)

  		expect(frame.bottom).toBe(-10)
  		expect(frame.top).toBe(10)
  		expect(frame.left).toBe(  frameLeft - frameWidth * desiredPercentage)
  		expect(frame.right).toBe((frameLeft + frameWidth) - frameWidth * desiredPercentage)
  	})
  })

  describe("shiftRight", function() {
  	it("shows more of what's right of the current frame by the desiredPercentage while preserving the aspect ratio", function() {
  		const desiredPercentage = 0.05
			const frameWidth = 10
			const frameLeft = 0
			let frame = new ViewFrame(frameLeft, frameLeft+frameWidth, -10, 10, 100, 40)

			frame.shiftRight(desiredPercentage)

			expect(frame.bottom).toBe(-10)
			expect(frame.top).toBe(10)
			expect(frame.left).toBe(  frameLeft + frameWidth * desiredPercentage)
			expect(frame.right).toBe((frameLeft + frameWidth) + frameWidth * desiredPercentage)
			})
  })
})