'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      user_id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      userrole: {
        allowNull: true,
        defaultValue: 'Customer',
        type: Sequelize.STRING
      },
      username: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      firstname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        isEmail: true,
        type: Sequelize.STRING
      },
      passwordDigest: {  //pgAdmin will not let us usethe word password in our column name
        type: Sequelize.STRING
        // the next line can be used to define the pw parameters. What do we want them to be? 
        // is: /^[a-z]+$/i
      },
      createdAt: {
        allowNull: true, 
        type: Sequelize.STRING
      },
      updatedAt: {
        allowNull: true, 
        type: Sequelize.STRING
      },
      billingid: {
        foreignKey: true,
        allowNull: true,
        type: Sequelize.INTEGER
      },
      shipid: {
        foreignKey: true,
        allowNull: true,
        type: Sequelize.INTEGER
      },
      paymentmethodid: {
        foreignKey: true,
        allowNull: true,
        type: Sequelize.INTEGER
      },
      orderid: {
        foreignKey: true,
        allowNull: true,
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};