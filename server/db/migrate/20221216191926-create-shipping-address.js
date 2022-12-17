'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('shipping_addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      country: {
        type: Sequelize.STRING,
        validate: {
          isIn: [["USA", "U.S.A", "United States", "United States of America"]],
        },
      },
      streetaddress: {
        type: Sequelize.STRING
      },
      addresslinetwo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      shipstate: {
        type: Sequelize.STRING
      },
      zipcode: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      userid: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('shipping_addresses');
  }
};