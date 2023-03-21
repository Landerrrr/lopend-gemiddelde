function DOEDIT () {
    metingen = [
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
    som = 0
    serial.redirect(
    SerialPin.USB_TX,
    SerialPin.USB_RX,
    BaudRate.BaudRate115200
    )
    Laag = 1023
    Hoog = 0
}
let Hoog = 0
let Laag = 0
let Gemiddelde = 0
let som = 0
let metingen: number[] = []
let LaatsteMeting = 0
let meting = 0
DOEDIT()
while (true) {
    meting = pins.analogReadPin(AnalogPin.P0)
    LaatsteMeting = metingen[0]
    som += meting
    som += -1 * LaatsteMeting
    metingen.push(meting)
    metingen.removeAt(0)
    Gemiddelde = som / 10
    if (Gemiddelde < Laag) {
        Laag = Gemiddelde
    }
    if (Gemiddelde > Hoog) {
        Hoog = Gemiddelde
    }
    basic.pause(5000)
    serial.writeLine("" + Laag + "   -   " + Hoog)
    Laag = 1023
    Hoog = 0
}
