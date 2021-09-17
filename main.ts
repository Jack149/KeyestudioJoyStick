led.enable(false)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        if (pins.digitalReadPin(DigitalPin.P6) == 0) {
            pins.digitalWritePin(DigitalPin.P1, 1)
        } else {
            if (pins.digitalReadPin(DigitalPin.P7) == 0) {
                pins.digitalWritePin(DigitalPin.P1, 1)
            } else {
                if (pins.digitalReadPin(DigitalPin.P8) == 0) {
                    pins.digitalWritePin(DigitalPin.P1, 1)
                } else {
                    if (pins.digitalReadPin(DigitalPin.P9) == 0) {
                        pins.digitalWritePin(DigitalPin.P1, 1)
                    } else {
                        if (pins.digitalReadPin(DigitalPin.P10) == 0) {
                            pins.digitalWritePin(DigitalPin.P1, 1)
                        } else {
                            if (pins.digitalReadPin(DigitalPin.P11) == 0) {
                                pins.digitalWritePin(DigitalPin.P1, 1)
                            } else {
                                if (pins.analogReadPin(AnalogPin.P3) < 400) {
                                    pins.digitalWritePin(DigitalPin.P0, 1)
                                } else {
                                    if (pins.analogReadPin(AnalogPin.P3) > 800) {
                                        pins.digitalWritePin(DigitalPin.P1, 1)
                                    } else {
                                        if (pins.analogReadPin(AnalogPin.P4) < 400) {
                                            pins.digitalWritePin(DigitalPin.P0, 1)
                                        } else {
                                            if (pins.analogReadPin(AnalogPin.P4) > 800) {
                                                pins.digitalWritePin(DigitalPin.P1, 1)
                                            } else {
                                                pins.digitalWritePin(DigitalPin.P0, 0)
                                                pins.digitalWritePin(DigitalPin.P1, 0)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
