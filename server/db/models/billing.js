"use strict";
// const order = require("./order");
// const user = require("./user");
// const payment_method = require("./payment_method");

const {
  Model 
} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class Billing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate({ order, user, payment_method }) {
    //   billing.belongsTo(user, { as: 'userid', foreignKey: 'id' });
    //   billing.hasMany(order, { as: 'orderid', foreignKey: 'id' });
    //   billing.hasMany(payment_method, {
    //     as: 'paymentmethodid',
    //     foreignKey: 'id',
    //   });
    // }
  }
  Billing.init({
    id:{
      primaryKey: true, 
      autoIncrement: true,
      type:Sequelize.INTEGER
    },
    userid: {
      foreignKey:true,
      type:Sequelize.INTEGER
    },
    orderid: {
      foreignKey:true,
      type:Sequelize.INTEGER
    },

    billingname: Sequelize.STRING,
    billingaddress: Sequelize.STRING,
    billinglinetwo: Sequelize.STRING,
    billingcity: Sequelize.STRING,
    billingzipcode: Sequelize.STRING
  }, {
    sequelize,
    modelName: 'billing',
    tableName: 'billings', 
    timestamps: false
  });
  return Billing;
};