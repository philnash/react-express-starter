"use strict";
const { Model }= require ("sequelize");

const inventory = require("./inventory");
const user = require("./user");
const shipping_address = require("./shipping_address");
const payment_method = require("./payment_method");
const billing = require("./billing");

module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    static associate({
      inventory,
      user,
      shipping_address,
      payment_method,
      billing,
    }) {
      order.belongsTo(user, { as: "userid", foreignKey: "userId" });
      order.belongsTo(payment_method, {
        as: "paymentmethodid",
        foreignKey: "paymentmethodId",
      });
      order.belongsTo(billing, { as: "billingid", foreignKey: "billingId" });
      order.belongsTo(shipping_address, {
        as: "shippingid",
        foreignKey: "shippingId",
      });
      order.hasMany(inventory, { as: "productid", foreignKey: "productId" });
    }
  }
  order.init(
    {
      orderid: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.STRING,
        foreignKey: true,
      },
      paymentmethodId: {
        type: DataTypes.STRING,
        foreignKey: true,
      },
      billingId: {
        type: DataTypes.STRING,
        foreignKey: true,
      },
      shipId: {
        type: DataTypes.STRING,
        foreignKey: true,
      },
      productId: {
        type: DataTypes.STRING,
        foreignKey: true,
      },
      quantitypurchased: DataTypes.INTEGER,
      ordersubtotal: DataTypes.INTEGER,
      shippingcost: DataTypes.INTEGER,
      ordertax: DataTypes.INTEGER,
      ordertotal: DataTypes.INTEGER,
      shipped: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      expdeliverydate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return order;
};
