'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {

    static associate({  }) {
        Inventory.hasMany(Orders, { as: 'orders', foreignKey: 'orders_id' })
      
    }

  };
  Inventory.init({
    inventroy_Id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    productName: DataTypes.STRING,
    quantity: DataTypes.SMALLINT,
    productDescription: DataTypes.STRING,
    productImage: DataTypes.STRING,
    price: DataTypes.SMALLINT
  }, {
    sequelize,
    underscored: true,
    modelName: 'Inventory',
  });
  return Inventory;
};