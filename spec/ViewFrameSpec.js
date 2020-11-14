describe("ViewFrame", function() {
  it("calculates the interval to the next horizontal step", function() {
    let frame = new ViewFrame(0, 10, -10, 10, 100, 40)
    expect(frame.stepX).toBe(0.1)
  });

  it("calculates the interval to the next vertical step", function() {
  	let frame = new ViewFrame(0, 10, -10, 10, 100, 40)
  	expect(frame.stepY).toBe(0.5)
  })
});