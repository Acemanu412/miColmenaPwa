const S = require("sequelize");
const db = require("../config/db");

class Test extends S.Model { }

// Este modelo fué hecho para testear la información del Arduino. Una vez que el Arduino envía información, se guardará el JSON
// aquí como un string para poder analizarlo con mas tranquilidad.

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
