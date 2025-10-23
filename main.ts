while (true) {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P0,
    true,
    false,
    true
    )
    if (dht11_dht22.readData(dataType.humidity) < 80) {
        Sugar.atomizer(DigitalPin.P0, true)
    } else {
        Sugar.atomizer(DigitalPin.P0, false)
    }
    basic.pause(5000)
}
