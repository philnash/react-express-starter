'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {

    // static associate({ Comment }) {
    //   Users.hasMany(Items, { as: 'author', foreignKey: 'author_id' })
      
    // }

  };
  Users.init({
    UserId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    UserRole: DataTypes.STRING,
    Username: DataTypes.STRING,
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Email: DataTypes.STRING,
    UserPassword: DataTypes.STRING,
  }, {
    sequelize,
    underscored: true,
    modelName: 'Users',
  });
  return User;
};