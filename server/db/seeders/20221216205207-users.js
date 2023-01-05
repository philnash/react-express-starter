'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      "users",
      [
        {
          user_id: 1,
          userrole: 'Admin',
          username: 'mgarvey',
          firstname: 'Marlene',
          lastname: 'Garvey',
          email: 'email@email.com',
          passwordDigest: '123456',
        },
        {
          user_id: 2,
          userrole: 'Admin',
          username: 'ckorth',
          firstname: 'Crystal',
          lastname: 'Korth',
          email: 'crystal@email.com',
          passwordDigest: '123456',
        },
        {
          user_id: 3,
          userrole: 'Admin',
          username: 'tswier',
          firstname: 'Tammy',
          lastname: 'Swierczynski',
          email: 'tammerz78@gmail.com',
          passwordDigest: '123456',
        },
        {
          user_id: 4,
          username: 'customer1',
          firstname: 'Cody',
          lastname: 'Cork',
          email: 'cody@email.com',
          passwordDigest: '123456',
        },
        {
          user_id: 5,
          username: 'customer2',
          firstname: 'Sam',
          lastname: 'Hughes',
          email: 'sam@email.com',
          passwordDigest: '123456',
        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
