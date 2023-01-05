'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('orders', [
      {
       id: 501,
      //  userid: 2, 
      //  productid: 1,
      //  shipid: 1,
      //  paymentmethodid: 1,
      //  billingid: 1,
       quantitypurchased: 1,
       ordersubtotal: '10.00',
       shippingcost: '5',
       ordertax: '.50',
       ordertotal: '3.40',
       shipped: true,
     },
      {
       id: 502,
      //  userid: 2, 
      //  productid: 1,
      //  shipid: 1,
      //  paymentmethodid: 1,
      //  billingid: 1,
       quantitypurchased: 1,
       ordersubtotal: '10.00',
       shippingcost: '5',
       ordertax: '.50',
       ordertotal: '3.40',
       shipped: true,
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders', null, {});
  }
};
