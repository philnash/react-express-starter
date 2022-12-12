'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment_Methods extends Model {

    // static associate({ Comment }) {
    //   Payment_Methods.hasMany(Items, { as: 'author', foreignKey: 'author_id' })
      
    // }

  };
  Payment_Methods.init({
    UserID: {
      foreignKey: true,
    },
    CardNumber: DataTypes.VARCHAR,
      validate: {
        is: [[0-9], '-'],
        max:3,
      },
    NameOnCard: DataTypes.STRING,
    ExpirationDate: DataTypes.DATE,
    SecurityCode: DataTypes.INTEGER, 
      validate: {
        is: [0-9],
        max:3,
      },
    NameOfCard: DataTypes.STRING,
    UserID: {
      foreignKey: true
    }
  }, {
    sequelize,
    underscored: true,
    modelName: 'Payment_Methods',
  });
  return Payment_Methods;
};