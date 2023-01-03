"use strict";
// const order = require("./order");
// const user = require("./user");

const {
  Model 
} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class Payment_method extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate({ order, user }) {
    //   payment_method.hasMany(order, { as: 'orderid', foreignKey: 'id' });
    //   payment_method.belongsTo(user, { as: 'userid', foreignKey: 'id' });
    // }
  }
  Payment_method.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    nameoncard: Sequelize.STRING,
    cardnumber: {
      type: Sequelize.INTEGER,
      isCreditCard: true,
      allowNull: false
    },
    expirationdate: Sequelize.DATE,
    securitycode: {
      type: Sequelize.INTEGER
      // validate: {
      //   is: [0 - 9],
      //   len: [3,4]
      },
      nameofcard: {
        defaultValue: 'My Card',
        type: Sequelize.STRING,
      },
      orderid: {
        foreignKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        foreignKey: true,
        type: Sequelize.INTEGER
      },
  }, {
    sequelize,
    modelName: 'payment_method',
    tableName: 'paynent_methods', 
    timestamps: false
  });
  return Payment_method;
};