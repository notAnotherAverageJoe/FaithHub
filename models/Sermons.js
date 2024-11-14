const { sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Sermon = sequelize.define(
  "Sermon",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preacher: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    media_url: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Sermon;
