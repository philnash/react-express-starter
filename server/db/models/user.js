const Sequelize = require('sequelize');
const { Model, Association, ForeignKey } = require('sequelize');
const sequelize = new Sequelize(
  process.env.PG_URI
  // 'postgres://cre8ivesolutions:password@localhost:5432/firestarter'
  );

const order = require("./order");
const shipping_address = require("./shipping_address");
const billing = require("./billing");
const payment_method = require("./payment_method");

// const queryInterface = sequelize.getQueryInterface()
//Model
// class User extends Model {}
const User = sequelize.define(
  'user',
  {
    // id: {
    //   primaryKey: true,
    //   autoIncrement: true,
    //   type: Sequelize.INTEGER,
    // },
    userrole: Sequelize.STRING,
    username: Sequelize.STRING,
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    email: Sequelize.STRING
    // hashedPassword: {
    //   type: Sequelize.STRING,
    //   set(password) {
    //     Sam can you update this next line with the hashed password?
    //     this.setDataValue('hashedPassword', hash(password));
      // },
    })
//     , {
//       sequelize,
//       modelName: 'User',
//       tableName: 'Users',
//       timestamps: false,
//     }
// )
// module.exports = (sequelize, Sequelize) => {
// class User extends Model {
// static associate(
//   { order, shipping_address, payment_method, billing }) {
//   User.hasMany(shipping_address, { as: "shipid", foreignKey: "id" });
//   User.hasMany(payment_method, {
//     as: "paymentmethodid",
//     foreignKey: "id",
//   });
//   User.hasMany(order, { as: "orderid", foreignKey: "id" });
//   User.hasMany(billing, { as: "billingid", foreignKey: "id" });
// }
// }

// User.init(
  
 


// return User;
// };

module.exports = User;
