let LaatsteMeting = 0
let meting = 0
let metingen = [
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
let som = 0
while (true) {
    meting = pins.analogReadPin(AnalogPin.P0)
    LaatsteMeting = metingen[0]
    som += meting
    som += -1 * LaatsteMeting
    metingen.push(meting)
    metingen.removeAt(0)
}
basic.forever(function () {
	
})
