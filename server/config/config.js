require("dotenv").config();

console.log("DB_PASSWORD = ", process.env.DB_PASSWORD);
console.log("PG_URI = ", process.env.PG_URI);

module.exports = {
  development: {
    url: process.env.PG_URI,
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
