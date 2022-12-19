"use strict";
// const { Sequelize, DataTypes, Model } = require ('sequelize');
// const sequelize = new Sequelize(process.env.PG_URI)

const order = require("./order");
const user = require("./user");

module.exports = (sequelize, DataTypes) => {
  class payment_method extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ order, user }) {
      payment_method.hasMany(order, { as: 'orderid', foreignKey: 'id' });
      payment_method.belongsTo(user, { as: 'userid', foreignKey: 'id' });
    }
  }
  payment_method.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    nameoncard: DataTypes.STRING,
    cardnumber: {
      type: DataTypes.INTEGER,
      isCreditCard: true,
      allowNull: false
    },
    expirationdate: DataTypes.DATE,
    securitycode: {
      type: DataTypes.INTEGER
      // validate: {
      //   is: [0 - 9],
      //   len: [3,4]
      },
      nameofcard: {
        defaultValue: 'My Card',
        type: DataTypes.STRING,
      },
      orderid: {
        foreignKey: true,
        type: DataTypes.INTEGER
      },
      userid: {
        foreignKey: true,
        type: DataTypes.INTEGER
      },
  }, {
    sequelize,
    modelName: 'payment_method',
    tableName: 'paynent_methods', 
    timestamps: false
  });
  return payment_method;
};