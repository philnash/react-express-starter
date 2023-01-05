require('dotenv').config();

// the next two lines are used to connect to the db
const { Sequelize } = require ('sequelize');
const pg = require('pg');

module.exports = new Sequelize(process.env.PG_URI)
console.log(`this is the database.js connection, and your PG_URI is ${process.env.PG_URI}`)
