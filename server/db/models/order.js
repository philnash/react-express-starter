'use strict';
const { Sequelize, DataTypes, Model } = require ('sequelize');
// This next line is used when using the Index.js to create the models. We are not using Index.js to create the models. 
// const sequelize = new Sequelize(process.env.PG_URI);

const inventory = require("./inventory1");
const user = require("./user");
const shipping_address = require("./shipping_address");
const payment_method = require("./payment_method");
const billing = require("./billing");

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({inventory,
      user,
      payment_method, 
      billing, 
      shipping_address,
      inventory }) {
        {
          order.belongsTo(user, {
             as: 'userid',foreignKey: 'id'
         });
          order.belongsTo(payment_method, {
            as: 'paymentmethodid',
            foreignKey: 'id',
          });
          order.belongsTo(billing, { as: 'billingid', foreignKey: 'id' });
          order.belongsTo(shipping_address, {
            as: 'shippingid',
            foreignKey: 'id',
          });
          order.hasMany(inventory, { as: 'productid', foreignKey: 'product_id' });
        }
    }
  }
  order.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    quantitypurchased: {
      type: DataTypes.STRING
    },
    ordersubtotal: {
      type: DataTypes.STRING
    },
    shippingcost: {
      type: DataTypes.STRING
    },
    ordertax: {
      type: DataTypes.STRING
    },
    ordertotal: {
      type: DataTypes.STRING
    },
    shipped: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    expdeliverydate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'order',
    tableName: 'orders'
  });
  return order;
};