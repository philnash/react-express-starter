'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('inventories', {
      product_id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderid: {
        foreignKey: true,
        type: Sequelize.INTEGER
      },
      productname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      productdescription: {
        type: Sequelize.STRING
      },
      qtyinstock: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      productimage: {
        allowNull: true,
        type: Sequelize.STRING
      },
      price: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('inventories');
  }
};