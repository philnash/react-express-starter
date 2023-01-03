"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "billings",
      [
        {
          id: 1,
          billingname: "Cody Cork",
          billingaddress: "1234 address",
          billingcity: "his city",
          billingstate: "His State",
          billingzipcode: 12345,
          userid: 4
        },
        {
          id: 2,
          billingname: "Cody Cork",
          billingaddress: "5432 address",
          billingcity: "his city",
          billingstate: "His State",
          billingzipcode: 12345,
          userid: 4
        },
        {
          id: 1,
          billingname: "Tammy S",
          billingaddress: "1111 address",
          billingcity: "city",
          billingstate: "her State",
          billingzipcode: 22222,
          userid: 3
        },
        {
          id: 1,
          billingname: "Crystal K",
          billingaddress: "her address",
          billingcity: "her city",
          billingstate: "her State",
          billingzipcode: 33333,
          userid: 2
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("billings", null, {});
  },
};
