const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgres://erikaastef99@db:5432/miColmena", {
  logging: false
});
module.exports = sequelize;
