"use strict";
const { Model } = require ("sequelize");

const order = require("./order");

module.exports = (sequelize, DataTypes) => {
  class inventory extends Model {
    static associate({order}) {
      inventory.hasMany(order, { as: "orderid", foreignKey: "orderId" });
    }
  }
  inventory.init(
    {
      productid: {
        type: DataTypes.STRING,
        primaryKey: true,
        notEmpty: true,
      },
      orderId: {
        type: DataTypes.STRING,
        foreignKey: true,
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
        type: DataTypes.STRING,
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
