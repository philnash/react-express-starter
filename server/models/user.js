"use strict";
const { Model } = require ("sequelize");

const order = require("./order");
const shipping_address = require("./shipping_address");
const billing = require("./billing");
const payment_method = require("./payment_method");

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate({ order, shipping_address, payment_method, billing }) {
      user.hasMany(shipping_address, { as: "shipid", foreignKey: "shipid" });
      user.hasMany(payment_method, {
        as: "paymentmethodid",
        foreignKey: "paymentmethodid",
      });
      user.hasMany(order, { as: "orderid", foreignKey: "orderid" });
      user.hasMany(billing, { as: "billingid", foreignKey: "billingid" });
    }
  }

  user.init({
      userid: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
      },
      userrole: {
        type: DataTypes.STRING,
        defaultValue: 'Customer'
      },
      username: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false, 
        isEmail: true
      },
      password: {
        type:DataTypes.TEXT
        // the next line can be used to define the pw parameters. What do we want them to be? 
        // is: /^[a-z]+$/i
    }},
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
