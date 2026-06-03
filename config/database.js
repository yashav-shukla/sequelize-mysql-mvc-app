const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "sequelize_db",
  "root",
  "Yashav@3528",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;