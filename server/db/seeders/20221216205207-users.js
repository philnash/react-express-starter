"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          userrole: "Admin",
          username: "mgarvey",
          firstname: "Margaret",
          lastname: "Garvey",
          email: "email@email.com",
          hashedPassword: "123456",
        },
        {
          userrole: "Admin",
          username: "ckorth",
          firstname: "Crystal",
          lastname: "Korth",
          email: "crystal@email.com",
          hashedPassword: "123456",
        },
        {
          userrole: "Admin",
          username: "tswier",
          firstname: "Tammy",
          lastname: "Swierczynski",
          email: "tammerz78@gmail.com",
          hashedPassword: "123456",
        },
        {
          username: "customer1",
          firstname: "Cody",
          lastname: "Cork",
          email: "cody@email.com",
          hashedPassword: "123456",
        },
        {
          username: "customer2",
          firstname: "Sam",
          lastname: "Hughes",
          email: "sam@email.com",
          hashedPassword: "123456",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
