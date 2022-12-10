'use strict';
const {
  Model
} = require('sequelize');
const inventory = require('./inventory');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {

    static associate({ Inventory, User, Shipping, Payment }) {
      Orders.hasMany(Inventory, { as: 'inventory' , foreignKey: 'inventroy_id'})
      Orders.belongsTo(User, {as:'user', foreignKey: 'user_id'})
      Orders.belongsTo(Shipping, {as:'shipping', foreignKey: 'shipping_id'})
      Orders.belongsTo(Payment, {as:'payment', foreignKey: 'payment_id'})
    }

  };
  Orders.init({
    orders_Id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    user_id: DataTypes.SMALLINT,
    product_id: DataTypes.SMALLINT,
    quantityPurchased: DataTypes.SMALLINT,
    orderSubtotal: DataTypes.SMALLINT,
    shippingCost: DataTypes.SMALLINT,
    orderTax: DataTypes.SMALLINT,
    orderTotal: DataTypes.SMALLINT,
    orderStatus: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'Orders',
  });
  return Orders;
};