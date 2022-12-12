"use strict";
import { Model } from "sequelize";

const order = require("./order");
const user = require("./user");

module.exports = (sequelize, DataTypes) => {
  class payment_method extends Model {
    static associate({ order, user }) {
      payment_method.hasMany(order, { as: "orderid", foreignKey: "orderid" });
      payment_method.belongsTo(user, { as: "userid", foreignKey: "userid" });
    }
  }
  payment_method.init(
    {
      paymentmethodid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      orderid: {
        foreignKey: true,
      },
      userid: {
        foreignKey: true,
      },
      nameoncard: {
        type: DataTypes.STRING,
        notEmpty: true, 
        allowNull: false    
      },
      cardnumber: {
        type: DataTypes.INTEGER,
        isCreditCard: true,
        allowNull: false,
      },
      expirationdate: DataTypes.DATE,
      securitycode: {
        type: DataTypes.INTEGER,
        validate: {
          is: [0 - 9],
          len: [3,4]
        }
      },
      nameofcard: {
        type: DataTypes.STRING,
        defaultValue: 'My Card'
    },
  },    {
      sequelize,
      modelName: "payment_method",
    }
  );
  return payment_method;
};
