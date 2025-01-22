let min = 1
let max = 100
let guess = 50
let attempts = 1

input.onButtonPressed(Button.A, function () {
    min = guess + 1
    guess = Math.floor((min + max) / 2)
    attempts += 1
    whaleysans.showNumber(guess)
})

input.onButtonPressed(Button.B, function () {
    max = guess - 1
    guess = Math.floor((min + max) / 2)
    attempts += 1
    whaleysans.showNumber(guess)
})

input.onButtonPressed(Button.AB, function () {
    basic.showString("WIN")
    whaleysans.showNumber(attempts)
})


