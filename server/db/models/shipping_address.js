"use strict";
// const user = require("./user");
// const order = require("./order");

const {
  Model 
} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class Shipping_address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(user, order) {
    //   shipping_address.hasMany(user, { as:'userid', foreignKey:'id'});
    //   shipping_address.hasMany(order, {as:'orderid', foreignKey:'id'});
    }
  
  Shipping_address.init({
    // id: {
    //   primaryKey: true,
    //   autoIncrement: true,
    //   type: Sequelize.INTEGER
    // },
    fullname: {
      allowNull: true,
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING,
      validate: {
        isIn: [["USA", "U.S.A", "United States", "United States of America"]],
      },
    },
    streetaddress: {
      type: Sequelize.STRING
    },
    addresslinetwo: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    shipstate: {
      type: Sequelize.STRING
    },
    zipcode: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    userid: {
      type: Sequelize.INTEGER,
      foreignKey: true
    },
  }, {
    sequelize,
    modelName: 'shipping_address',
    tableName: 'shipping_addresses',
    timestamps: false
  });
  return Shipping_address;
};