const S = require("sequelize");
const db = require("../config/db");

class DeviceInput extends S.Model { }

DeviceInput.init(
  {
    idDevice: {
      type: S.STRING,
      allowNull: false
    },

    date: {
      type: S.DATE,
      allowNull: false
    },

    GPSposition: {
      type: S.STRING,
      allowNull: false
    },

    pesoUno: {
      type: S.INTEGER,
      allowNull: false
    },

    pesoDos: {
      type: S.INTEGER,
      allowNull: false
    },

    pesoTres: {
      type: S.INTEGER,
      allowNull: false
    },

    pesoCuatro: {
      type: S.INTEGER,
      allowNull: false
    },

    humedadInterior: {
      type: S.INTEGER,
      allowNull: false
    },

    temperaturaInterior: {
      type: S.INTEGER,
      allowNull: false
    },

    audio: {
      type: S.STRING,
      allowNull: false
    },

    imagenPiquera: {
      type: S.STRING,
      allowNull: false
    },

    humedadExterior: {
      type: S.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: "deviceinput"
  }
);

module.exports = DeviceInput;
