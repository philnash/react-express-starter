"use strict";
import { Model } from "sequelize";

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
      order.belongsTo(user, { as: "userid", foreignKey: "userid" });
      order.belongsTo(payment_method, {
        as: "paymentmethodid",
        foreignKey: "paymentmethodid",
      });
      order.belongsTo(billing, { as: "billingid", foreignKey: "billingid" });
      order.belongsTo(shipping_address, {
        as: "shippingid",
        foreignKey: "shippingid",
      });
      order.hasMany(inventory, { as: "productid", foreignKey: "productid" });
    }
  }
  order.init(
    {
      orderid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userID: {
        foreignKey: true,
      },
      paymentmethodid: {
        foreignKey: true,
      },
      billingid: {
        foreignKey: true,
      },
      shipid: {
        foreignKey: true,
      },
      productid: {
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
