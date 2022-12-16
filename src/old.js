// 'use strict';
// // const { Model } = require ("sequelize");
// const fs = require('fs')
// const path = require('path')
// const Sequelize = require ('sequelize')
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/config.json')[env];
// const db = {};
// let sequelize;

// // const { DataTypes } = require ('sequelize')

// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }
///This is the part of the code that we are having problems with. 
// fs.readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });




// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });
// module.exports = db;

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
