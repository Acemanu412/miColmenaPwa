import { types } from "mobx-state-tree";

const InputDevice = types
    .model("InputDevice", {
        audio: types.string,
        colmenaId: types.number,
        createdAt: types.string,
        date: types.string,
        deviceId: types.number,
        humedadInterior: types.number,
        id: types.number,
        imagenPiquera: types.string,
        latitud: types.string,
        longitud: types.string,
        pesoCuatro: types.number,
        pesoDos: types.number,
        pesoTres: types.number,
        pesoUno: types.number,
        temperaturaInterior: types.number,
    });

export default InputDevice;
