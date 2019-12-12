import { types } from "mobx-state-tree";

const Colmena = types
    .model("Colmena", {
        createdAt: types.string,
        foto: types.string,
        id: types.integer,
        nombre: types.string,
        torresmeteorologicaId: types.maybeNull(types.integer),
        updatedAt: types.string,
        userId: types.integer,
    });

export default Colmena;
