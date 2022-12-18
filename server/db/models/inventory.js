"use strict";
const { Sequelize, DataTypes, Model } = require ('sequelize');
// const sequelize = new Sequelize(process.env.PG_URI)
const order = require("./order");

module.exports = (sequelize, DataTypes) => {
  class inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ order }) {
      inventory.hasMany(order, { as: 'orderid', foreignKey: 'id' }
      );
    }
  }
  inventory.init({
    product_id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    orderId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    productname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productdescription: DataTypes.STRING,
    qtyinstock: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    productimage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  }, {
    sequelize,
    modelName: 'inventory',
    tableName: 'inventories',
    timestamps: false
  });
  return inventory;
};