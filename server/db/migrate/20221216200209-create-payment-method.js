'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payment_methods', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameoncard: {
        type: Sequelize.STRING
      },
      cardnumber: {
        isCreditCard:true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      expirationdate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      securitycode: {
        type: Sequelize.INTEGER
      },
      nameofcard: {
        defaultValue: 'My Card',
        type: Sequelize.STRING
      },
      orderid: {
        allowNull: true,
        foreignKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        foreignKey: true,
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('payment_methods');
  }
};