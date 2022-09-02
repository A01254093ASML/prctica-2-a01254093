input.onButtonPressed(Button.A, function () {
    Número1 += 1
    basic.showNumber(Número1)
})
input.onButtonPressed(Button.AB, function () {
    Texto1 = "Sofia"
    basic.showString(Texto1)
})
input.onButtonPressed(Button.B, function () {
    Número1 += -1
    basic.showNumber(Número1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Texto1 = "Ana"
    basic.showString(Texto1)
})
let Número1 = 0
let Texto1 = ""
Texto1 = "Ana"
Número1 = 5
