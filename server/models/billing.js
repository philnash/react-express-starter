"use strict";
const { Model } = require ("sequelize");

const order = require("./order");
const user = require("./user");
const payment_method = require("./payment_method");

module.exports = (sequelize, DataTypes) => {
  class billing extends Model {
    static associate({ order, user, payment_method }) {
      billing.belongsTo(user, { as: "userid", foreignKey: "userId" });
      billing.hasMany(order, { as: "orderid", foreignKey: "orderId" });
      billing.hasMany(payment_method, {
        as: "paymentmethodid",
        foreignKey: "paymentmethodId",
      });
    }
  }

  billing.init(
    {
      bilingid: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.STRING,
        foreignKey: true
      },
      orderId: {
        type: DataTypes.STRING,
        foreignKey: true
      },
      billingname: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      billingaddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      billinglinetwo: DataTypes.STRING,
      billingcity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      billingzipcode: {
        type: DataTypes.STRING,
        isNumeric: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "billing",
    }
  );
  return billing;
};
