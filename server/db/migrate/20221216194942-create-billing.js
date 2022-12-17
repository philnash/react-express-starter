'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('billings', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      billingname: {
        type: Sequelize.STRING
      },
      billingaddress: {
        type: Sequelize.STRING
      },
      billinglinetwo: {
        type: Sequelize.STRING
      },
      billingcity: {
        type: Sequelize.STRING
      },
      billingzipcode: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('billings');
  }
};