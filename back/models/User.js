const S = require("sequelize");
const db = require("../config/db");
const crypto = require("crypto");

class User extends S.Model { }

// El salt es usado para generar el hash de la password (Un string alfanumérico aleatorio que se guarda en la base de datos).
// Esto se hace de esta manera para proteger los datos del usuario.

User.init(
  {
    email: {
      type: S.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: S.STRING,
      allowNull: false
    },

    username: {
      type: S.STRING,
      allowNull: false
    },

    telefono: {
      type: S.BIGINT,
      allowNull: true
    },

    activated: {
      type: S.BOOLEAN,
      defaultValue: false
    },

    salt: {
      type: S.STRING
    }
  },
  {
    sequelize: db,
    modelName: "user"
  }
);

User.addHook("beforeCreate", (user) => {
  user.salt = crypto.randomBytes(20).toString("hex");
  user.password = user.hashPassword(user.password);
});

User.prototype.setNewHashedPassword = function () {
  this.salt = crypto.randomBytes(20).toString("hex");
  this.password = this.hashPassword(this.password);
}

User.prototype.hashPassword = function (password) {
  return crypto
    .createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
};

User.prototype.validPassword = function (password) {
  return this.password === this.hashPassword(password);
};

module.exports = User;
