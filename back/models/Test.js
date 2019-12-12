const S = require("sequelize");
const db = require("../config/db");

class Test extends S.Model { }

Test.init(
    {
        dataArduino: {
            type: S.TEXT,
            allowNull: false
        },
    },
    {
        sequelize: db,
        modelName: "device"
    }
);

module.exports = Test;