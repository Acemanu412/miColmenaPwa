const S = require("sequelize");
const db = require("../config/db");

class Audio extends S.Model { }

// Este modelo esta creado pero en la implementación actual no está siendo utilizado.

Audio.init(
    {
        timestamp: {
            type: S.DATE,
            allowNull: false,
        },
        geolocation: {
            type: S.STRING,
            allowNull: false,
        },
        state: {
            type: S.STRING,
        }
    },
    {
        sequelize: db,
        modelName: "device"
    }
);

module.exports = Audio;
