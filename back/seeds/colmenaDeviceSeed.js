const { Colmena } = require("../models/index");
const { Device } = require("../models/index");
const { DeviceInput } = require("../models/index");

Device.create({ MACadress: "60:01:94:0E:A1:D6" })
    .then(async (newDevice) => {
        let newColmena, newInputDevice;
        newColmena = await Colmena.create({ nombre: "Colmena 1 Device", foto: "abejas1@2x.png" })
        newDevice.setColmena(newColmena)
        const date = new Date()
        newDeviceInput = await DeviceInput.create({
            date: date, latitud: "1.396389", longitud: "78.424722", pesoUno: "23.325", pesoDos: "32.754",
            pesoTres: "42.934", pesoCuatro: "24.598", humedadInterior: "64", temperaturaInterior: "28",
            audio: "audio.mp3", imagenPiquera: "imagen.png"
        })
        newDevice.addDeviceinputs(newDeviceInput)
        newColmena.addDeviceinputs(newDeviceInput)
    })
    .catch(err => console.log(err))

