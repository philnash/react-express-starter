require("dotenv").config();

console.log(`config.js is burnin'`);

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "firestarter",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "firestarter_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "firestarter_production",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
