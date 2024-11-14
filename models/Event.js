const { sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Event = sequelize.define(
  "Event",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true, // this will handle the timestamps
  }
);
