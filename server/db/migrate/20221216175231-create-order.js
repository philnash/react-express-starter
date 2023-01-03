'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      userid: {
        foreignKey: true,
        type: Sequelize.INTEGER
      },
      productid: {
        foreignKey: true, 
        type: Sequelize.INTEGER
      },
      shipid: {
        foreignKey: true, 
        type: Sequelize.INTEGER
      },
      paymentmethodid: {
        foreignKey: true, 
        type: Sequelize.INTEGER
      },
      billingid: {
        foreignKey: true, 
        type: Sequelize.INTEGER
      },
      quantitypurchased: {
        type: Sequelize.INTEGER
      },
      ordersubtotal: {
        allowNull: true,
        type: Sequelize.STRING
      },
      shippingcost: {
        allowNull: true,
        type: Sequelize.STRING
      },
      ordertax: {
        allowNull: true,
        type: Sequelize.STRING
      },
      ordertotal: {
        allowNull: true,
        type: Sequelize.STRING
      },
      shipped: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      expdeliverydate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};