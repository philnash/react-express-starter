"use strict";
// const { Sequelize, DataTypes, Model } = require ('sequelize');
// The next line is used when using index.js to create models, but we are not using this right now
// const sequelize = new Sequelize(process.env.use_env_variable);

const order = require("./order");
const user = require("./user");
const payment_method = require("./payment_method");

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class billing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ order, user, payment_method }) {
      billing.belongsTo(user, { as: 'userid', foreignKey: 'id' });
      billing.hasMany(order, { as: 'orderid', foreignKey: 'id' });
      billing.hasMany(payment_method, {
        as: 'paymentmethodid',
        foreignKey: 'id',
      });
    }
  }
  billing.init({
    id:{
      primaryKey: true, 
      autoIncrement: true,
      type:DataTypes.INTEGER
    },
    userid: {
      foreignKey:true,
      type:DataTypes.INTEGER
    },
    orderid: {
      foreignKey:true,
      type:DataTypes.INTEGER
    },

    billingname: DataTypes.STRING,
    billingaddress: DataTypes.STRING,
    billinglinetwo: DataTypes.STRING,
    billingcity: DataTypes.STRING,
    billingzipcode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'billing',
    tableName: 'billings', 
    timestamps: false
  });
  return billing;
};