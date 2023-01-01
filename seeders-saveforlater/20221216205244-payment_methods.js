'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('payment_methods', [
      {
       id: 1,
       nameoncard: 'jane doe',
       cardnumber: 1234-1234-1234-1234,
       securitycode: 123,
       nameofcard: 'my card',
       orderid: 501,
       userid: 4
     }, 
      {
       id: 2,
       nameoncard: 'jane doe2',
       cardnumber: 1234-1234-1234-1234,
       securitycode: 123,
       nameofcard: 'my card',
       userid: 4
     }, 
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
