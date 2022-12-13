"use strict";
import { Model } from "sequelize";

const order = require("./order");

module.exports = (sequelize, DataTypes) => {
  class inventory extends Model {
    static associate({}) {
      inventory.hasMany(order, { as: "orderid", foreignKey: "orderid" });
    }
  }
  inventory.init(
    {
      productid: {
        type: DataTypes.STRING,
        primaryKey: true,
        notEmpty: true,
      },
      productname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productdescription: DataTypes.STRING,

      qtyinstock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      productimage: {
        type: DataTypes.IMAGE,
        allowNull: true,
      },
      price: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
    },
    {
      sequelize,
      modelName: "inventory",
    }
  );
  return inventory;
};
