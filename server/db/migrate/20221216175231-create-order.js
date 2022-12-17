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
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};