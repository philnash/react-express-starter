"use strict";
import { Model } from "sequelize";

const user = require("./user");
const order = require("./order");

export default (sequelize, DataTypes) => {
  class shipping_address extends Model {
    static associate({ user, order }) {
      user.hasMany(user, { as: "userid", foreignKey: "userid" });
      user.hasMany(order, { as: "orderid", foreignKey: "orderid" });
    }
  }
  shipping_address.init(
    {
      shipid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        // serial: true
      },
      userid: {
        foreignKey: true,
      },
      orderid: {
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
