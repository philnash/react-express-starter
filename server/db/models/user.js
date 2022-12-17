"use strict";
// const { Sequelize, DataTypes, Model } = require ('sequelize');

// This next line is used when using the Index.js to create the models. We are not using Index.js to create the models. 
// const sequelize = new Sequelize(process.env.PG_URI)

const order = require("./order");
const shipping_address = require("./shipping_address");
const billing = require("./billing");
const payment_method = require("./payment_method");

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate({ order, shipping_address, payment_method, billing }) {
      user.hasMany(shipping_address, { as: 'shipid', foreignKey: 'id' });
      user.hasMany(payment_method, {
        as: 'paymentmethodid',
        foreignKey: 'id',
      });
      user.hasMany(order, { as: 'orderid', foreignKey: 'id' });
      user.hasMany(billing, { as: 'billingid', foreignKey: 'id' });
    }
  }

  user.init({
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
        userrole: {
        allowNull: true,
        defaultValue: 'Customer',
        type: DataTypes.STRING
      },
      username: {
        allowNull: false,
        unique: true,
        type:DataTypes.STRING
      },
      firstname: {
        allowNull: false,
        type: DataTypes.STRING
      },
      lastname: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false, 
        isEmail: true,
        type: DataTypes.STRING
      },
      hashedPassword: {
        type:DataTypes.STRING,
        set(value) {
          // Sam can you update this next line with the hashed password? 
          this.setDataValue('hashedPassword', hash(value));
          // the next line can be used to define the pw parameters. What do we want them to be? 
          // is: /^[a-z]+$/i
        }
    }},
    {
      sequelize,
      modelName: 'user',
      tableName: 'users', 
      timestamps: false
    }
  );
  return user;
};
