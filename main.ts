let x = 0
basic.forever(function () {
    x = input.rotation(Rotation.Pitch)
    if (x < 0 && x > -10) {
        basic.setLedColor(0xffff00)
    } else if (x <= -10) {
        basic.setLedColor(0xff0000)
    } else {
        basic.setLedColor(0x00ff00)
    }
})
