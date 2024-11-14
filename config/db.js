// config/database.js
require("dotenv").config(); // Load environment variables from .env file
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  {
    dialect: process.env.DB_DIALECT,
  }
);

module.exports = sequelize;
