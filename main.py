def on_sound_loud():
    global servo1_angles, servo2_angles
    # 각 서보의 동작 각도를 배열로 정의
    servo1_angles = [0, 45, 45, 90]
    servo2_angles = [150, 150, 120, 90]
    for index in range(2):
        basic.clear_screen()
        basic.show_icon(IconNames.HEART)
        i = 0
        while i <= len(servo1_angles) - 1:
            # 두 서보 동시 설정
            servos.P1.set_angle(servo1_angles[i])
            servos.P2.set_angle(servo2_angles[i])
            basic.pause(200)
            basic.clear_screen()
            i += 1
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

servo2_angles: List[number] = []
servo1_angles: List[number] = []
basic.show_icon(IconNames.SMALL_HEART)
# 서보 초기 설정
servos.P1.set_pulse(2500)
servos.P2.set_pulse(2500)
# 초기 각도 설정
servos.P2.set_angle(95)
servos.P1.set_angle(90)

def on_forever():
    pass
basic.forever(on_forever)
