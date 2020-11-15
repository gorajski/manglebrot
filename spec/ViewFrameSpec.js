describe("ViewFrame", function() {
  it("calculates the step to the next horizontal pixel (units per pixel)", function() {
    let frame = new ViewFrame(0, 10, -10, 10, 100, 40)
    // if there are 100 pixels and 10 units to cover, then 10/100 = 0.1
    expect(frame.stepX).toBe(0.1)
  })

  it("calculates the step to the next vertical pixel (units per pixel)", function() {
  	let frame = new ViewFrame(0, 10, -10, 10, 100, 40)
  	// if there are 40 pixels and 20 units to cover, then 20/40 = 0.5
  	expect(frame.stepY).toBe(0.5)
  })

  describe("stepDown", function() {
  	it("moves the frame up by the SWING_PERCENTage but preserves the aspect ratio", function() {
  		const SWING_PERCENT = 0.05
  		let frame = new ViewFrame(0, 10, -10, 10, 100, 40)
  		frame.stepDown()
  		expect(frame.bottom).toBe(-10 + 20*SWING_PERCENT)
  		expect(frame.top).toBe(    10 + 20*SWING_PERCENT)
  		expect(frame.left).toBe(0)
  		expect(frame.right).toBe(10)
  	})
  })

  describe("stepUp", function() {
  	it("moves the frame down by the SWING_PERCENTage but preserves the aspect ratio", function() {
  		const SWING_PERCENT = 0.05
  		let frame = new ViewFrame(0, 10, -10, 10, 100, 40)
  		frame.stepUp()
  		expect(frame.bottom).toBe(-10 - 20*SWING_PERCENT)
  		expect(frame.top).toBe(    10 - 20*SWING_PERCENT)
  		expect(frame.left).toBe(0)
  		expect(frame.right).toBe(10)
  	})
  })

  describe("stepLeft", function() {
  	it("moves the frame left by the SWING_PERCENTage but preserves the aspect ratio", function() {
  		const SWING_PERCENT = 0.05
  		let frame = new ViewFrame(0, 10, -10, 10, 100, 40)
  		frame.stepLeft()
  		expect(frame.bottom).toBe(-10)
  		expect(frame.top).toBe(10)
  		expect(frame.left).toBe(  0 + 10*SWING_PERCENT)
  		expect(frame.right).toBe(10 + 10*SWING_PERCENT)
  	})
  })

  describe("stepRight", function() {
  	it("moves the frame left by the SWING_PERCENTage but preserves the aspect ratio", function() {
  		const SWING_PERCENT = 0.05
  		let frame = new ViewFrame(0, 10, -10, 10, 100, 40)
  		frame.stepRight()
  		expect(frame.bottom).toBe(-10)
  		expect(frame.top).toBe(10)
  		expect(frame.left).toBe(  0 - 10*SWING_PERCENT)
  		expect(frame.right).toBe(10 - 10*SWING_PERCENT)
  	})
  })
})