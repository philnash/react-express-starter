'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('inventories', [{

       product_id: 1,
       productname: 'THE 1 Firestarter',
       productdescription: `A recycled product made in Wisconsin. For Use in Campfires, Wood Stoves, Fireplaces.
       Lights Gradually. Will not flare up. No newspaper or kindling needed. Directions: Place in bottom of fire, stack wood over ring and light. Come on baby light your fire!`, 
       price: 1.50
      }
     ], {});
    
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('inventories', null, {});
     }
};
