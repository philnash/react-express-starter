'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
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
      hashedPassword: {
        type: Sequelize.STRING
        // the next line can be used to define the pw parameters. What do we want them to be? 
        // is: /^[a-z]+$/i
    }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};