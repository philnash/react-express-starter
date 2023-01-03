'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('shipping_addresses', [
      {
       id: 1,
       fullname: 'this name',
       country: 'USA',
       streetaddress: 'this address',
       city: 'seedercity',
       shipstate: 'seedstate',
       zipcode: '54555-555',
       phone: '123-1234', 
       userid: 4
     },
      {
       id: 2,
       fullname: 'that name',
       country: 'USA',
       streetaddress: 'that address',
       city: 'seedercity',
       shipstate: 'seedstate',
       zipcode: '54555-555',
       phone: '123-1234', 
       userid: 4
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {

   await queryInterface.bulkDelete('shipping_addresses', null, {});

  }
};
