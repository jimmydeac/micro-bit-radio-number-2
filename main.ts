radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber <= 20) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
radio.setGroup(10)
basic.showLeds(`
    # # # . .
    # . # . .
    # # # # .
    # . . # .
    # . . # .
    `)
basic.forever(function () {
	
})
