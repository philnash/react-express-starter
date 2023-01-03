"use strict";
// const order = require("./order");

const {
  Model 
} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate({ order }) {
    //   inventory.hasMany(order, { as: 'orderid', foreignKey: 'id' }
    //   );
    // }
  }
  Inventory.init({
    product_id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    orderId: {
      type: Sequelize.INTEGER,
      foreignKey: true,
    },
    productname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    productdescription: Sequelize.STRING,
    qtyinstock: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    productimage: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    price: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  }, {
    sequelize,
    modelName: 'inventory',
    tableName: 'inventories',
    timestamps: false
  });
  return Inventory;
};