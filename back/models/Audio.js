const S = require("sequelize");
const db = require("../config/db");

class Audio extends S.Model { }

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
