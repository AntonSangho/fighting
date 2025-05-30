# 코드

## 알고리즘 설명

이 프로젝트는 이렇게 작동해요:

1. 처음에는 작은 하트 아이콘을 표시해요
2. 두 서보모터의 초기 각도를 설정해요
3. 큰 소리(박수)가 감지되면:
   - 두 서보모터가 움직일 각도 값들을 배열로 만들어요
   - 두 번 반복해서 다음 동작을 수행해요:
     - 큰 하트 아이콘을 표시해요
     - 서보모터들이 설정된 각도로 차례대로 움직여요
     - 각 움직임 사이에 잠시 기다려요
4. 동작이 끝나면 다시 처음 상태로 돌아가서 박수 소리를 기다려요

## 블록코딩

이 그림처럼 블록을 연결하면 돼요:

![code](/img/microbit-cheeringdoll.png)

## 텍스트코딩 (Python)

```python
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
```

## 코드 설명

이 코드의 중요한 부분을 설명해 드릴게요:

1. **초기 설정**:
   - `작은 하트 아이콘 출력`: 작은 하트 아이콘을 표시해요.
   - `서보 P1, P2 의 펄스를 2500(us)로 설정 `: 서보모터의 펄스 폭을 설정해요.
   - `서보 P1, P2 의 초기 각도를 90(도)로 설정`: 서보모터의 초기 각도를 설정해요.

2. **소리 감지 이벤트**:
   - `큰 소리가 들릴 때 `: 큰 소리(박수)가 감지되면 안에 응원 동작을 실행해요.

3. **응원 동작**:
   - `servo1_angles 에 [0, 45, 45, 90] 저장`, `servo2_angles 에 [150, 150, 120, 90] 저장`: 서보모터가 움직일 각도들을 배열로 저장해요.
   - `실행 2번 반복`: 동작을 2번 반복해요.
   - `큰 하트 아이콘 출력`: 큰 하트 아이콘을 표시해요.
   - `서보의 각도를 (도)로 설정 `: 저장된 모든 각도를 차례대로 실행해요.
   - `servo1_angles[i], servo2_angles[i]`: 두 서보모터를 동시에 지정된 각도로 움직여요.
   - `일시중지 200(ms)`: 0.2초 동안 기다려요.

## 코드 업로드하는 방법

1. 컴퓨터에서 [MakeCode 편집기](https://makecode.microbit.org/)를 열어요.
2. "새 프로젝트" 버튼을 눌러요.
3. 왼쪽 메뉴에서 "고급"을 클릭한 다음 "확장기능"을 선택해요.
4. "servo"를 검색하고 선택해요. (서보모터 라이브러리)
5. 블록을 그림처럼 연결하거나 JavaScript 탭을 클릭한 후 위의 코드를 붙여넣어요.
6. 프로젝트 이름을 넣고 저장해요.
7. "다운로드" 버튼을 눌러서 파일을 컴퓨터에 저장해요.
8. USB 케이블로 마이크로비트를 컴퓨터에 연결해요.
9. 다운로드한 파일을 마이크로비트 드라이브에 복사해요.
10. 코드가 마이크로비트에 올라가면 자동으로 실행돼요.

## 코드 바꿔보기

1. **서보모터 각도 바꾸기**:
   - `서보1 각도 배열 = [0, 45, 45, 90]` 와 `서보2 각도 배열 = [150, 150, 120, 90]` 값을 바꿔서 다른 응원 동작을 만들어보세요.
   - 각도는 0도부터 180도 사이에서 정할 수 있어요.

2. **반복 횟수 바꾸기**:
   - `반복 2번` 값을 바꿔서 응원 동작을 더 많이 또는 더 적게 반복하게 해보세요.

3. **움직임 속도 바꾸기**:
   - `일시중지 200 ms` 값을 바꿔 팔 움직임 속도를 조절해보세요.
   - 숫자가 작을수록 더 빨리 움직여요.

4. **하트 대신 다른 아이콘 사용하기**:
   - `큰 하트 아이콘 표시` 부분을 다른 아이콘으로 바꿔보세요.
   - 웃는 얼굴, 별 등 다양한 아이콘이 있어요.

5. **A 버튼 기능 추가하기**:
   - 지금은 비어있는 `A 버튼 누를 때` 함수에 특별한 응원 동작을 추가해보세요.

## 문제 해결하기

- **소리에 반응하지 않아요**: 
  - 마이크로비트 v2인지 확인하세요. (v1은 내장 마이크가 없어요)
  - 소리 감지 민감도 설정이 필요할 수 있어요.
  
- **서보모터가 움직이지 않아요**:
  - 서보 확장기능이 추가되었는지 확인하세요.
  - P1과 P2 핀에 서보모터의 신호선이 제대로 연결되었는지 확인하세요.
  - 건전지가 충분히 충전되었는지 확인하세요.
  
- **서보모터가 이상하게 움직여요**:
  - 각도 값이 0-180 범위 안에 있는지 확인하세요.
  - 초기 펄스 설정(set_pulse)이 서보모터에 맞는지 확인하세요.
