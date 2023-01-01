"use strict";

const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          userrole: "Admin",
          username: "mgarvey",
          firstname: "Marlene",
          lastname: "Garvey",
          email: "email@email.com",
          passwordDigest: bcrypt.hash("123456")
        },
        {
          userrole: "Admin",
          username: "ckorth",
          firstname: "Crystal",
          lastname: "Korth",
          email: "crystal@email.com",
          passwordDigest: bcrypt.hash("123456")
        },
        {
          userrole: "Admin",
          username: "tswier",
          firstname: "Tammy",
          lastname: "Swierczynski",
          email: "tammerz78@gmail.com",
          passwordDigest: bcrypt.hash("123456")
        },
        {
          username: "customer1",
          firstname: "Cody",
          lastname: "Cork",
          email: "cody@email.com",
          passwordDigest: bcrypt.hash("123456")
        },
        {
          username: "customer2",
          firstname: "Sam",
          lastname: "Hughes",
          email: "sam@email.com",
          passwordDigest: bcrypt.hash("123456")
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
