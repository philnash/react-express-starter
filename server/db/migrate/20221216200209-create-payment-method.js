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
        foreignKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        foreignKey: true,
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
    await queryInterface.dropTable('payment_methods');
  }
};