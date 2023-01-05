"use strict";
// **uncomment the next four lines once we get logged in
// const order = require("./order");
// const shipping_address = require("./shipping_address");
// const billing = require("./billing");
// const payment_method = require("./payment_method");

//Model
const {
  Model 
} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
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
      user_id: Sequelize.STRING,
      // uuid: Sequelize.STRING,
      userrole: Sequelize.STRING,
      username: Sequelize.STRING,
      firstname: Sequelize.STRING,
      lastname: Sequelize.STRING,
      email: Sequelize.STRING,
      passwordDigest: {
        type: Sequelize.STRING,
      },
    },
    {
      sequelize,
      modelName: 'user',
      tableName: "users",
      timestamps: false,
    }
  );
  return User;
};
