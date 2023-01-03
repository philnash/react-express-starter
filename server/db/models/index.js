'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URI)
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user")

// //Testing the connection to the db
sequelize 
  .authenticate()
  .then(() => console.log`Database connected with PG_URI at Models/index.js...`)
  .catch((err) => console.log("Error" + err));

module.exports = db;