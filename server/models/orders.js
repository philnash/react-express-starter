'use strict';
const {
  Model, DATE
} = require('sequelize');
const inventory = require('./Inventory');
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
    OrderID: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    UserID: DataTypes.SMALLINT,
    ProductID: DataTypes.SMALLINT,
    QuantityPurchased: DataTypes.SMALLINT,
    OrderSubtotal: DataTypes.SMALLINT,
    ShippingCost: DataTypes.SMALLINT,
    OrderTax: DataTypes.SMALLINT,
    OrderTotal: DataTypes.SMALLINT,
    Shipped: DataTypes.BOOLEAN, 
    ExpDeliveryDate: DataTypes.DATE,
  }, {
    sequelize,
    underscored: true,
    modelName: 'Orders',
  });
  return Orders;
};