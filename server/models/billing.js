'use strict';
import { Model } from 'sequelize';

const order = require('./order')
const user = require('./user')
const payment_method = require('./payment_method');

module.exports = (sequelize, DataTypes) => {
  class billing extends Model {

    static associate({ order, user, payment_method }) {
      billing.belongsTo(user, {as:'userid', foreignKey: 'userid'})
      billing.hasMany(order, {as:'orderid', foreignKey: 'orderid'})
      billing.hasMany(payment_method, {as:'paymentmethodid', foreignKey: 'paymentmethodid'})
    }

  };
  billing.init({
    bilingid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userid: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
    orderid: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    billingname:{
        type:DataTypes.TEXT,
        allowNull: false,
        unique: true
      },
    billingaddress:{
        type:DataTypes.STRING,
        allowNull: false
      },
    billinglinetwo:DataTypes.STRING,
    billingcity:{
        type:DataTypes.STRING,
        allowNull: false
      },
    billingzipcode:{
        type:DataTypes.INTEGER,
        isNumeric: true,
        allowNull: false
      },
    ccnumber:{
        type:DataTypes.INTEGER,
        isCreditCard:true,
        allowNull: false
      },
    ccsecuritycode:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'billing',
  });
  return billing;
};