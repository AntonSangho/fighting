input.onSound(DetectedSound.Loud, function () {
    basic.clearScreen()
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(100)
        servos.P2.setAngle(135)
        servos.P1.setAngle(45)
        basic.pause(2000)
        servos.P2.setAngle(45)
        servos.P1.setAngle(135)
        basic.pause(2000)
        servos.P2.setAngle(135)
        servos.P1.setAngle(45)
        basic.pause(2000)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
	
})
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
servos.P2.setAngle(90)
servos.P1.setAngle(45)
basic.forever(function () {
	
})
