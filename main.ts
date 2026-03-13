let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
let Win = 0
basic.forever(function () {
    if (Win == 0) {
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            Win = 1
        }
        if (pins.digitalReadPin(DigitalPin.P2) == 1) {
            Win = 2
        }
        if (pins.digitalReadPin(DigitalPin.P16) == 1) {
            Win = 3
        }
    }
    if (input.logoIsPressed()) {
        Win = 0
    }
})
basic.forever(function () {
    if (Win == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (Win == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (Win == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (Win == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
