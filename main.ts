input.onButtonPressed(Button.A, function () {
    basic.showNumber(Número1 + 1)
})
input.onButtonPressed(Button.AB, function () {
    Texto1 += 1
    basic.showString(Texto1)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Número1 - 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(Texto1)
})
let Número1 = 0
let Texto1 = ""
Texto1 = "Sofia"
Número1 = 5
