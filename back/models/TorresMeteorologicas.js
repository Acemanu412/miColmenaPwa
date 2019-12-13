const S = require("sequelize");
const db = require("../config/db");

class TorresMeteorologicas extends S.Model { }

// Recomendamos guardar la información de las torres meteorológicas que se envía desde la api del Servicio Meteorológico Nacional.

TorresMeteorologicas.init(
    {
        longitud: {
            type: S.STRING,
            allowNull: false
        },

        latitud: {
            type: S.STRING,
            allowNull: false
        },

        provincia: {
            type: S.STRING,
            allowNull: false
        },

    },
    {
        sequelize: db,
        modelName: "torresmeteorologicas"
    }
);

module.exports = TorresMeteorologicas;
