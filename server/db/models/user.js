const order = require("./order");
const { Sequelize, Model, DataTypes, Association, ForeignKey  } = require('sequelize');
const shipping_address = require('./shipping_address');
const billing = require('./billing');
const payment_method = require('./payment_method');

const sequelize = new Sequelize(process.env.PG_URI);
// const queryInterface = sequelize.getQueryInterface()

// module.exports = (sequelize, DataTypes) => {
class User extends Model {
  static associate({ order, shipping_address, payment_method, billing }) {
    User.hasMany(shipping_address, { as: "shipid", foreignKey: "id" });
    User.hasMany(payment_method, {
      as: "paymentmethodid",
      foreignKey: "id",
    });
    User.hasMany(order, { as: "orderid", foreignKey: "id" });
    User.hasMany(billing, { as: "billingid", foreignKey: "id" });
  }
}

User.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    userrole: {
      allowNull: true,
      defaultValue: "Customer",
      type: DataTypes.STRING,
    },
    username: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    firstname: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastname: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      isEmail: true,
      type: DataTypes.STRING,
    },
    hashedPassword: {
      type: DataTypes.STRING,
      set(password) {
        // Sam can you update this next line with the hashed password?
        this.setDataValue("hashedPassword", hash(password));
        // the next line can be used to define the pw parameters. What do we want them to be?
        // is: /^[a-z]+$/i
      },
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: false,
  }
);
return User;
// };
