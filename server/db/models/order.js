'use strict';
// **uncomment the next four lines once we get logged in
// const inventory = require("./inventory");
// const user = require("./user");
// const shipping_address = require("./shipping_address");
// const payment_method = require("./payment_method");
// const billing = require("./billing");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate({inventory,
    //   user,
    //   payment_method, 
    //   billing, 
    //   shipping_address }) {
    //     {
    //       order.belongsTo(user, {
    //          as: 'userid',foreignKey: 'id'
    //      });
    //       order.belongsTo(payment_method, {
    //         as: 'paymentmethodid',
    //         foreignKey: 'id',
    //       });
    //       order.belongsTo(billing, { as: 'billingid', foreignKey: 'id' });
    //       order.belongsTo(shipping_address, {
    //         as: 'shippingid',
    //         foreignKey: 'id',
    //       });
    //       order.hasMany(inventory, { as: 'productid', foreignKey: 'product_id' });
    //     }
    // }
  }
  Order.init({
    // id: {
    //   autoIncrement: true,
    //   primaryKey: true,
    //   type: Sequelize.INTEGER
    // },
    quantitypurchased: {
      type: Sequelize.STRING
    },
    ordersubtotal: {
      type: Sequelize.STRING
    },
    shippingcost: {
      type: Sequelize.STRING
    },
    ordertax: {
      type: Sequelize.STRING
    },
    ordertotal: {
      type: Sequelize.STRING
    },
    shipped: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    expdeliverydate: {
      type: Sequelize.DATE,
      allowNull: true
    },
      }, {
    sequelize,
    modelName: 'order',
    tableName: 'orders'
  });
  return Order;
};