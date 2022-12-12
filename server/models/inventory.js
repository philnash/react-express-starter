'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {

    static associate({  }) {
        Inventory.hasMany(Orders, { as: 'orders', foreignKey: 'OrderID' })
      
    }

  };
  Inventory.init({
    ProductId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    ProductName: DataTypes.STRING,
    ProductDescription: DataTypes.STRING,
    QtyInStock: DataTypes.SMALLINT,
    ProductImage: DataTypes.IMAGE,
    Price: DataTypes.SMALLINT
  }, {
    sequelize,
    underscored: true,
    modelName: 'Inventory',
  });
  return Inventory;
};