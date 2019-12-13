const S = require("sequelize");
const db = require("../config/db");

class InformeMeteorologico extends S.Model { }

// Este modelo está creado pero no está siendo usado en la implementación actual.

InformeMeteorologico.init(
    {
        humedad: {
            type: S.INTEGER,
            allowNull: false
        },

        temperatura: {
            type: S.INTEGER,
            allowNull: false
        },

        velocidadViento: {
            type: S.INTEGER,
            allowNull: false
        },

        direccionViento: {
            type: S.STRING,
            allowNull: false
        },
    },
    {
        sequelize: db,
        modelName: "informemeteorologico"
    }
);

module.exports = InformeMeteorologico;
