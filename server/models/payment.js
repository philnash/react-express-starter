'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {

    static associate({ Comment }) {
      Payment.hasMany(Items, { as: 'author', foreignKey: 'author_id' })
      
    }

  };
  Payment.init({
    payment_Id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'Payment',
  });
  return Payment;
};