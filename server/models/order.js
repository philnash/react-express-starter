'use strict';
import { Model } from 'sequelize';

const inventory = require('./inventory');
const user = require('./user');
const shipping_address = require('./shipping_address');
const payment_method = require('./payment_method');
const billing = require('./billing');

module.exports = (sequelize, DataTypes) => {
  class order extends Model {

    static associate({ inventory, user, shipping_address, payment_method, billing }) {
      order.hasMany(inventory, { as: 'inventory' , foreignKey: 'productid'})
      order.belongsTo(user, {as:'userid', foreignKey: 'userid'})
      order.belongsTo(shipping_address, {as:'shipping', foreignKey: 'shipping_id'})
      order.belongsTo(Payment, {as:'payment', foreignKey: 'payment_id'})
    }

  };
  order.init({
    OrderID: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    userID: DataTypes.SMALLINT,
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
    modelName: 'order',
  });
  return order;
};