let hit_time = 0
let target = 0
let running = false
let false_start = false
let start = 0
let end = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showNumber(3)
        basic.showNumber(2)
        basic.showNumber(1)
        basic.clearScreen()
        running = false
        false_start = false
        basic.pause(1000 + Math.randomRange(0, 3000))
        if (!(false_start)) {
            start = input.runningTime()
            running = true
            led.stopAnimation()
            basic.clearScreen()
            target = Math.randomRange(0, 1)
            if (target == 0) {
                basic.showLeds(`
                    . . # . .
                    . # . . .
                    # . . . .
                    . # . . .
                    . . # . .
                    `)
            } else {
                basic.showLeds(`
                    . . # . .
                    . . . # .
                    . . . . #
                    . . . # .
                    . . # . .
                    `)
            }
        }
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        if (target == 0) {
            if (running) {
                running = false
                end = input.runningTime()
                basic.showLeds(`
                    # # # # #
                    # . . . #
                    # . # . #
                    # . . . #
                    # # # # #
                    `)
                basic.pause(1000)
                hit_time = end - start
                if (hit_time < 600) {
                    basic.showIcon(IconNames.Happy)
                } else {
                    basic.showIcon(IconNames.Sad)
                    basic.showNumber(end - start)
                }
            } else {
                false_start = true
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
        } else {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        if (target == 1) {
            if (running) {
                running = false
                end = input.runningTime()
                basic.showLeds(`
                    # # # # #
                    # . . . #
                    # . # . #
                    # . . . #
                    # # # # #
                    `)
                basic.pause(1000)
                hit_time = end - start
                if (hit_time < 600) {
                    basic.showIcon(IconNames.Happy)
                } else {
                    basic.showIcon(IconNames.Sad)
                    basic.showNumber(end - start)
                }
            } else {
                false_start = true
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
        } else {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
    }
})
