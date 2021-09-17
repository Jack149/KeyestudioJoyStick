led.enable(False)

def on_forever():
    if pins.digital_read_pin(DigitalPin.P5) == 0:
        pins.digital_write_pin(DigitalPin.P1, 1)
    else:
        if pins.digital_read_pin(DigitalPin.P6) == 0:
            pins.digital_write_pin(DigitalPin.P1, 1)
        else:
            if pins.digital_read_pin(DigitalPin.P7) == 0:
                pins.digital_write_pin(DigitalPin.P1, 1)
            else:
                if pins.digital_read_pin(DigitalPin.P8) == 0:
                    pins.digital_write_pin(DigitalPin.P1, 1)
                else:
                    if pins.digital_read_pin(DigitalPin.P9) == 0:
                        pins.digital_write_pin(DigitalPin.P1, 1)
                    else:
                        if pins.digital_read_pin(DigitalPin.P10) == 0:
                            pins.digital_write_pin(DigitalPin.P1, 1)
                        else:
                            if pins.digital_read_pin(DigitalPin.P11) == 0:
                                pins.digital_write_pin(DigitalPin.P1, 1)
                            else:
                                if pins.analog_read_pin(AnalogPin.P3) < 400:
                                    pins.digital_write_pin(DigitalPin.P0, 1)
                                else:
                                    if pins.analog_read_pin(AnalogPin.P3) > 800:
                                        pins.digital_write_pin(DigitalPin.P1, 1)
                                    else:
                                        if pins.analog_read_pin(AnalogPin.P4) < 400:
                                            pins.digital_write_pin(DigitalPin.P0, 1)
                                        else:
                                            if pins.analog_read_pin(AnalogPin.P4) > 800:
                                                pins.digital_write_pin(DigitalPin.P1, 1)
                                            else:
                                                pins.digital_write_pin(DigitalPin.P0, 0)
                                                pins.digital_write_pin(DigitalPin.P1, 0)
basic.forever(on_forever)
