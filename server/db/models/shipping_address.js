"use strict";
const { Sequelize, DataTypes } = require ('sequelize');
const sequelize = new Sequelize(process.env.PG_URI)

const user = require("./user");
const order = require("./order");

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shipping_address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(user, order) {
      shipping_address.hasMany(user, { as:'userid', foreignKey:'id'});
      shipping_address.hasMany(order, {as:'orderid', foreignKey:'id'});
    }
  }
  shipping_address.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    fullname: {
      allowNull: true,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    country: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["USA", "U.S.A", "United States", "United States of America"]],
      },
    },
    streetaddress: {
      type: DataTypes.STRING
    },
    addresslinetwo: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    shipstate: {
      type: DataTypes.STRING
    },
    zipcode: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    userid: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
  }, {
    sequelize,
    modelName: 'shipping_address',
    tableName: 'shipping_addresses',
    timestamps: false
  });
  return shipping_address;
};