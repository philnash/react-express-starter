"use strict";
const { Model } = require ("sequelize");

const user = require("./user");
const order = require("./order");

module.exports = (sequelize, DataTypes) => {
  class shipping_address extends Model {
    static associate({ user, order }) {
      shipping_address.hasMany(user, { as: "userid", foreignKey: "userId" });
      shipping_address.hasMany(order, { as: "orderid", foreignKey: "orderId" });
    }
  }
  shipping_address.init(
    {
      shipid: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true,
        // serial: true
      },
      userId: {
        type: DataTypes.STRING,
        foreignKey: true,
      },
      orderId: {
        type: DataTypes.STRING,
        foreignKey: true,
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        validate: {
          isIn: [["USA", "U.S.A", "United States", "United States of America"]],
        },
      },
      streetaddress: DataTypes.STRING,
      addresslinetwo: DataTypes.STRING,
      city: DataTypes.STRING,
      shipstate: DataTypes.STRING,
      zipcode: {
        type: DataTypes.INTEGER,
        validate: {
          len: [5, 10],
        },
      },
      phone: {
        type: DataTypes.INTEGER,
        validate: {
          len: [10, 14],
        },
      },
    },
    {
      sequelize,
      modelName: "shipping_address",
    }
  );
  return shipping_address;
};
