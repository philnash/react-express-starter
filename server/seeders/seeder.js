"use strict";
require("dotenv").config();

export async function up(queryInterface, Sequelize) {
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
      username: "theboss",
      firstname: "Crystals mom",
      lastname: "her last name",
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
    `SELECT userid from users LIMIT 1;`
  );

  await queryInterface.bulkInsert("inventory", [
    {
      productid: 1,
      productdescription: "The description goes here", 
      qtyinstock: 0,
    //   productimage: ,
      price: 1.50,
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: `http://localhost:${process.env.PORT}/images/h-thai-ml-tables.jpg`,
      founded: 1989,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: `http://localhost:${process.env.PORT}/images/coffee-cat.png`,
      founded: 2020,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);

  const [places] = await queryInterface.sequelize.query(
    `SELECT place_id from places LIMIT 1;`
  );

  await queryInterface.bulkInsert("comments", [
    {
      place_id: places[0].place_id,
      author_id: users[0].user_id,
      rant: false,
      stars: 5.0,
      content:
        "Wow, simply amazing food here. I highly recommend this to anyone visiting the area!",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("users", null, {});
  await queryInterface.bulkDelete("places", null, {});
  await queryInterface.bulkDelete("comments", null, {});
}
