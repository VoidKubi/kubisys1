input.onButtonPressed(Button.A, function () {
    basic.showString("Jestem KubiBot stworzony przez @Kubi i @MegaJJ!")
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        . # # # .
        . # . # .
        `)
    music.playMelody("C D E D C - - C5 ", 500)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        . # # # .
        . # . # .
        `)
    music.playMelody("C D E D C - - C5 ", 500)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # . # #
        # # . . #
        # # . # #
        # # # # #
        `)
    basic.pause(2000)
    basic.showString("Daj SUBA panu markowi")
    music.playMelody("C D E D C - - C5 ", 500)
})
basic.showLeds(`
    # # . # #
    # # . # #
    . . # . .
    . # # # .
    . # . # .
    `)
music.playMelody("C D E D C - - C5 ", 500)
