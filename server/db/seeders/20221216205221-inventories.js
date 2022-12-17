'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('inventories', [{

       product_id: 1,
       productname: 'THE 1 Firestarter',
       productdescription: "Come on baby light your fire!", 
       price: 1.50
      }
     ], {});
    
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('inventories', null, {});
     }
};
