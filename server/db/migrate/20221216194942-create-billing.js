'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('billings', {
      id: {
        autoIncrement: true,
        primaryKey: false,
        type: Sequelize.INTEGER
      },
      billingname: {
        type: Sequelize.STRING
      },
      billingaddress: {
        type: Sequelize.STRING
      },
      billinglinetwo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      billingcity: {
        type: Sequelize.STRING
      },
      billingstate: {
        type: Sequelize.STRING
      },
      billingzipcode: {
        type: Sequelize.STRING
      },
      userid: {
        foreignKey: true,
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('billings');
  }
};