const Sequelize = require('sequelize');
const express = require('express');
const app = express();

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost', 
    dialect: 'postgres',
})
//Middleware
app.use(express.json());

// app.get('/users', (req, res) => {
//   User.findAll()
//     .then((users) => res.json(users))
//     .catch((error) => res.status(400).json({ error: error.message }));
// });

const db = require('../models')

db.sequelize.sync({force: false}).then(function(){
    app.listen([env], function(){
        console.log("models/index.js is running")
    })
})