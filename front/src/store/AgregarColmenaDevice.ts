import { types } from "mobx-state-tree";

const AgregarColmenaDevice = types
    .model("AgregarColmenaDevice", {
        MACadress: types.string,
        nombreColmena: types.string,
    });

export default AgregarColmenaDevice;
