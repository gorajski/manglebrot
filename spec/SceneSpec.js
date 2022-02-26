describe("Scene", function () {
	describe("calculateSceneCoordinate", function() {
		it("converts the origin frame coordinate into the origin scene coordinate", function() {
			let canvas = {
				getContext: function (dummy) {
					return {}
				},
				width: 10,
				height: 10
			}

			let frameLeft = -10
			let frameRight = 10
			let frameBottom = -10
			let frameTop = 10
			let pointInFrameX = 0
			let pointInFrameY = 0

			let frame = new ViewFrame(frameLeft, frameRight, frameTop, frameBottom, 10, 10)
			let scene = new Scene(canvas, frame)

			let expectedSceneX = scene.width / 2
			let expectedSceneY = scene.height / 2

			const result = scene.calculateSceneCoordinate(pointInFrameX, pointInFrameY)

			expect(result.x).toBe(expectedSceneX)
			expect(result.y).toBe(expectedSceneY)
		})

		it("converts (0, frameBottom) frame coordinate into the scene coordinate", function() {
			let canvas = {
				getContext: function (dummy) {
					return {}
				},
				width: 10,
				height: 10
			}

			let frameLeft = -10
			let frameRight = 10
			let frameBottom = -10
			let frameTop = 10
			let pointInFrameX = 0
			let pointInFrameY = frameBottom

			let frame = new ViewFrame(frameLeft, frameRight, frameBottom, frameTop, 10, 10)
			let scene = new Scene(canvas, frame)

			let expectedSceneX = scene.width / 2			// OK		0
			let expectedSceneY = scene.height  				// OK		bottom of the screen

			const result = scene.calculateSceneCoordinate(pointInFrameX, pointInFrameY)

			expect(result.x).toBe(expectedSceneX)
			expect(result.y).toBe(expectedSceneY)
		})

		it("converts (0, frameTop) frame coordinate into the scene coordinate", function() {
			let canvas = {
				getContext: function (dummy) {
					return {}
				},
				width: 10,
				height: 10
			}

			let frameLeft = -10
			let frameRight = 10
			let frameBottom = -10
			let frameTop = 10
			let pointInFrameX = 0
			let pointInFrameY = frameTop

			let frame = new ViewFrame(frameLeft, frameRight, frameBottom, frameTop, 10, 10)
			let scene = new Scene(canvas, frame)

			let expectedSceneX = scene.width / 2
			let expectedSceneY = 0

			const result = scene.calculateSceneCoordinate(pointInFrameX, pointInFrameY)

			expect(result.x).toBe(expectedSceneX)
			expect(result.y).toBe(expectedSceneY)
		})
	})

	it("converts (frameRight, 0) frame coordinate into the scene coordinate", function() {
		let canvas = {
			getContext: function (dummy) {
				return {}
			},
			width: 10,
			height: 10
		}

		let frameLeft = -10
		let frameRight = 10
		let frameBottom = -10
		let frameTop = 10
		let pointInFrameX = frameRight
		let pointInFrameY = 0

		let frame = new ViewFrame(frameLeft, frameRight, frameBottom, frameTop, 10, 10)
		let scene = new Scene(canvas, frame)

		let expectedSceneX = scene.width
		let expectedSceneY = scene.height / 2

		const result = scene.calculateSceneCoordinate(pointInFrameX, pointInFrameY)

		expect(result.x).toBe(expectedSceneX)
		expect(result.y).toBe(expectedSceneY)
	})

	it("converts (frameLeft, 0) frame coordinate into the scene coordinate", function() {
		let canvas = {
			getContext: function (dummy) {
				return {}
			},
			width: 10,
			height: 10
		}

		let frameLeft = -10
		let frameRight = 10
		let frameBottom = -10
		let frameTop = 10
		let pointInFrameX = frameLeft
		let pointInFrameY = 0

		let frame = new ViewFrame(frameLeft, frameRight, frameTop, frameBottom, 10, 10)
		let scene = new Scene(canvas, frame)

		let expectedSceneX = 0
		let expectedSceneY = scene.height / 2

		const result = scene.calculateSceneCoordinate(pointInFrameX, pointInFrameY)

		expect(result.x).toBe(expectedSceneX)
		expect(result.y).toBe(expectedSceneY)
	})

    describe("drawAxes", function () {
        it("places a horizontal line through the pixel representing the origin 0,0", function () {
            const expectedPenDownX = 0
            const expectedPenDownY = 5
            const expectedRectWidth = 10
            const expectedRectHeight = 1

            let mockCallCount = 0
            let firstMockCallResult = false
            let secondMockCallResult = false
            let lineSpec = false

            let mockFillRect = function (x, y, width, height) {
                mockCallCount++
                if (mockCallCount === 1) {
                    firstMockCallResult = true
                } else if (mockCallCount === 2) {
                    secondMockCallResult = true
                    console.log(
                        // 	x === expectedPenDownX &&
                        y
                        // 	width === expectedRectWidth &&
                        // 	height === expectedRectHeight
                    )
                    if
                    (
                        x === expectedPenDownX &&
                        y === expectedPenDownY &&
                        width === expectedRectWidth &&
                        height === expectedRectHeight
                    ) {
                        lineSpec = true
                    }
                }
            }

            let canvas = {
                getContext: function (dummy) {
                    return {
                        fillStyle: "eeeeee",
                        fillRect: mockFillRect
                    }
                },
                width: 10,
                height: 10
            }
            let frame = new ViewFrame(0, 10, -10, 10, 100, 40)
            let scene = new Scene(canvas, frame)

            scene.drawAxes()

            expect(firstMockCallResult).toBe(true)
            expect(secondMockCallResult).toBe(true)
            expect(mockCallCount).toBe(2)
            expect(lineSpec).toBe(true)
        })

		it("places a horizontal line through the pixel representing the origin 0,0 - Second case", function () {
			const expectedPenDownX = 0
			const expectedPenDownY = 10
			const expectedRectWidth = 10
			const expectedRectHeight = 1

			let mockCallCount = 0
			let firstMockCallResult = false
			let secondMockCallResult = false
			let lineSpec = false

			let mockFillRect = function (x, y, width, height) {
				mockCallCount++
				if (mockCallCount === 1) {
					firstMockCallResult = true
				} else if (mockCallCount === 2) {
					secondMockCallResult = true
					console.log(
						//	x === expectedPenDownX &&
						y // === expectedPenDownY
						// 	width === expectedRectWidth &&
						// 	height === expectedRectHeight
					)
					if
					(
						x === expectedPenDownX &&
						y === expectedPenDownY &&
						width === expectedRectWidth &&
						height === expectedRectHeight
					) {
						lineSpec = true
					}
				}
			}

			let canvas = {
				getContext: function (dummy) {
					return {
						fillStyle: "eeeeee",
						fillRect: mockFillRect
					}
				},
				width: 10,
				height: 10
			}
			let frame = new ViewFrame(-10, 10, 0, 10, 100, 40)
			let scene = new Scene(canvas, frame)

			scene.drawAxes()

			expect(firstMockCallResult).toBe(true)
			expect(secondMockCallResult).toBe(true)
			expect(mockCallCount).toBe(2)
			expect(lineSpec).toBe(true)
		})

		it("places a horizontal line through the pixel representing the origin 0,0 - Third case", function () {
			const expectedPenDownX = 0
			const expectedPenDownY = 0
			const expectedRectWidth = 10
			const expectedRectHeight = 1

			let mockCallCount = 0
			let firstMockCallResult = false
			let secondMockCallResult = false
			let lineSpec = false

			let mockFillRect = function (x, y, width, height) {
				mockCallCount++
				if (mockCallCount === 1) {
					firstMockCallResult = true
				} else if (mockCallCount === 2) {
					secondMockCallResult = true
					console.log(
						//	x === expectedPenDownX &&
						y // === expectedPenDownY
						// 	width === expectedRectWidth &&
						// 	height === expectedRectHeight
					)
					if
					(
						x === expectedPenDownX &&
						y === expectedPenDownY &&
						width === expectedRectWidth &&
						height === expectedRectHeight
					) {
						lineSpec = true
					}
				}
			}

			let canvas = {
				getContext: function (dummy) {
					return {
						fillStyle: "eeeeee",
						fillRect: mockFillRect
					}
				},
				width: 10,
				height: 10
			}
			let frame = new ViewFrame(-10, 10, -10, 0, 100, 40)
			let scene = new Scene(canvas, frame)

			scene.drawAxes()

			expect(firstMockCallResult).toBe(true)
			expect(secondMockCallResult).toBe(true)
			expect(mockCallCount).toBe(2)
			expect(lineSpec).toBe(true)
		})
    })
})

// it("places a vertical line through the pixel representing the origin 0,0", function() {
// 	let canvas = {
// 		getContext: (e) => {
// 			return {
// 				fillStyle: "",
// 				fillRect: (x,y,width,height) => {
// 					if (x==0 && y==0 && width == 0 && height == 0) { this.flag = true }
// 				},
// 				// xAxisDrawn = false,
// 				// yAxisDrawn = false
// 			}
// 		},
// 		width: 10,
// 		height: 10
// 	}
// 	let frame = new ViewFrame(-2.5, 2.5, -2.5, 2.5, 5, 5)
// 	let scene = new Scene(canvas, frame)

// 	scene.drawAxes()

// 	let context = canvas.getContext()

// 	expect(true).toBe(true)
// })