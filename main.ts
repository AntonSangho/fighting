input.onSound(DetectedSound.Loud, function () {
    // 각 서보의 동작 각도를 배열로 정의
    servo1_angles = [
    0,
    45,
    45,
    90
    ]
    servo2_angles = [
    150,
    150,
    120,
    90
    ]
    for (let index = 0; index < 2; index++) {
        basic.clearScreen()
        // 초기 화면 설정
        basic.showLeds(`
            # # # # #
            # # # # #
            # . . . #
            # # # # #
            # # # # #
            `)
        for (let i = 0; i <= servo1_angles.length - 1; i++) {
            // 두 서보 동시 설정
            servos.P1.setAngle(servo1_angles[i])
            servos.P2.setAngle(servo2_angles[i])
            basic.pause(200)
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.A, function () {
	
})
let servo2_angles: number[] = []
let servo1_angles: number[] = []
// 초기 화면 설정
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
// 서보 초기 설정
servos.P1.setPulse(2500)
servos.P2.setPulse(2500)
// 초기 각도 설정
servos.P2.setAngle(95)
servos.P1.setAngle(90)
basic.forever(function () {
	
})
