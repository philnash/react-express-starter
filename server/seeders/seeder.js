// "use strict";
// require("dotenv").config();

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert("user", [
    {
      userrole: "Customer",
      username: "first_seed",
      firstname: "first seed name",
      lastname: "first user last name",
      email: "firstseed@email.com",
      password: "hashed?",
    },
    {
      userrole: "Admin",
      username: "mgarvey",
      firstname: "Marlene",
      lastname: "Garvey",
      email: "her@email.com",
      password: "hashed?",
    },
    {
      userrole: "Customer",
      username: "third_seed",
      firstname: "third seed name",
      lastname: "third user last name",
      email: "thirdseed@email.com",
      password: "hashed?",
    },
  ]);

  const [user] = await queryInterface.sequelize.query(
    `SELECT userid from user LIMIT 1;`
  );

  await queryInterface.bulkInsert("inventory", [
    {
      productid: 1,
      productdescription: "The description goes here", 
      qtyinstock: 0,
    //   productimage: ,
      price: 1.50,
    },
    {
      productid: 2,
      productdescription: "The next description goes here", 
      qtyinstock: 0,
    //   productimage: ,
      price: 20,
    },
  ]);
  const [inventory] = await queryInterface.sequelize.query(
    `SELECT productid from inventory LIMIT 1;`
  );


  await queryInterface.bulkInsert("shipping_address", [
    {
      shipid: 1,
      userid: 501,
      fullname: "shipping fullname",
      country: "USA", 
      streetaddress: "1234 address",
      addresslinetwo: "apt 1",
      city: "ship city",
      shipstate: "Wisconsin",
      zipcode: 55555,
      phone: 5551112222,
    },
    {
      shipid: 2,
      userid: 501,
      fullname: "2shipping fullname",
      country: "USA", 
      streetaddress: "1234 address",
      addresslinetwo: "apt 2",
      city: "ship city2",
      shipstate: "Wisconsin",
      zipcode: 55555,
      phone: 5551112222,
    },
  ]);

const [shipping_address] = await queryInterface.sequelize.query(
  `SELECT shipid from shipping_address LIMIT 1;`
);
},
down: async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete("user", null, {});
  await queryInterface.bulkDelete("inventory", null, {});
  await queryInterface.bulkDelete("shipping_address", null, {});
},
}