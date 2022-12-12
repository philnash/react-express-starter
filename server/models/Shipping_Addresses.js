'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipping_Addresses extends Model {

    // static associate({ Comment }) {
    //   User.hasMany(Items, { as: 'author', foreignKey: 'author_id' })
      
    // }

  };
  Shipping_Addresses.init({
    UserId: {
      foreignKey: true,
    },
    FullName: DataTypes.STRING,
    Country: DataTypes.STRING,
    StreetAddress: DataTypes.STRING,
    AddressLineTwo: DataTypes.STRING,
    City: DataTypes.STRING,
    ShipState: DataTypes.STRING,
    ZipCode: DataTypes.INTEGER,
    Phone: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: true,
    modelName: 'Shipping_Addresses',
  });
  return Shipping_Address;
};