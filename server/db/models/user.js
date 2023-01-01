"use strict";
// **uncomment the next four lines once we get logged in
// const order = require("./order");
// const shipping_address = require("./shipping_address");
// const billing = require("./billing");
// const payment_method = require("./payment_method");

//Model
module.export = (sequelize, DataTypes, Model) => {
    class User extends Model {
    // static associate(
    //   { order, shipping_address, payment_method, billing }) {
    //   User.hasMany(shipping_address, { as: "shipid", foreignKey: "id" });
    //   User.hasMany(payment_method, {
    //     as: "paymentmethodid",
    //     foreignKey: "id",
    //   });
    //   User.hasMany(order, { as: "orderid", foreignKey: "id" });
    //   User.hasMany(billing, { as: "billingid", foreignKey: "id" }
    // )
    }

    User.init(
    {
      userrole: DataTypes.STRING,
      username: DataTypes.STRING,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      passwordDigest: {
        type: DataTypes.STRING,
      },
    },  {
      sequelize,
      modelName: "User",
      // tableName: "users",
      timestamps: false,
    }
    );
  return User;
  // };
};
