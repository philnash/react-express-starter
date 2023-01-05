'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URI)
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user")
db.billing = require("./billing")
db.order = require("./order")
db.payment_method = require("./payment_method")
db.shipping_address = require("./shipping_address")
db.inventory = require("./inventory")

// //Testing the connection to the db
// sequelize 
//   .authenticate()
//   .then(() => console.log`Database connected with PG_URI at Models/index.js...`)
//   .catch((err) => console.log("Error" + err));

module.exports = db;