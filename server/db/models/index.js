// Instead of using an index file to configure the models, we will use CLI commands to genereate the models. This file is typically only used for setup. See Mod 4- Activity 3.


// // This code is from the activity from class
// const { Sequelize } = require("sequelize");

// if (config.use_env_variable){
//     sequelize = new Sequelize(process.env[use_env_variable], config); 
// } else {
//     sequelize = new Sequelize(config.database, config.username, config.password, config)
// }


// "use strict";
// const { Sequelize, DataTypes, Model } = require ('sequelize');
// // const sequelize = new Sequelize(process.env.PG_URI)
// const express = require('express');
// const app = express();

// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost', 
//     dialect: 'postgres',
// })
// //Middleware
// app.use(express.json());

// // app.get('/users', (req, res) => {
// //   User.findAll()
// //     .then((users) => res.json(users))
// //     .catch((error) => res.status(400).json({ error: error.message }));
// // });

// const db = require('../models')
