"use strict";

const { DataTypes, Model, Association, ForeignKey, Sequelize } = require('sequelize');
const sequelize = require('sequelize')

const order = require("./order");
const shipping_address = require("./shipping_address");
const billing = require("./billing");
const payment_method = require("./payment_method");

//Model
module.export = (sequelize, DataTypes) => {
class User extends Model {
  // static associate(
  //   { order, shipping_address, payment_method, billing }) {
  //   User.hasMany(shipping_address, { as: "shipid", foreignKey: "id" });
  //   User.hasMany(payment_method, {
  //     as: "paymentmethodid",
  //     foreignKey: "id",
  //   });
  //   User.hasMany(order, { as: "orderid", foreignKey: "id" });
  //   User.hasMany(billing, { as: "billingid", foreignKey: "id" }
  // )
}

User.init(
  {
    // id: {
    //   primaryKey: true,
    //   autoIncrement: true,
    //   type: DataTypes.INTEGER,
    // },
    // uuid: DataTypes.INTEGER,
    userrole: DataTypes.STRING,
    username: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: {
      type: DataTypes.STRING,
      //   set(password) {
      //     Sam can you update this next line with the hashed password?
      //     this.setDataValue('hashedPassword', hash(password));
    },
  },  {
    modelName: "User",
    tableName: "users",
    timestamps: false,
  });
};
