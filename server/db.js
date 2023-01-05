const Pool = require("pg").Pool;

// this is being used from server.js / app.use and routing to the config.js file to get data to the browser

const pool = new Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "firestarter"
});

module.exports = pool;