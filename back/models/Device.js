const S = require("sequelize");
const db = require("../config/db");

class Device extends S.Model { }

Device.init(
    {
        MACadress: {
            type: S.STRING,
            allowNull: false
        },
    },
    {
        sequelize: db,
        modelName: "device"
    }
);

module.exports = Device;