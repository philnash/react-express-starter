require("dotenv").config();
const express = require("express");
const app = express();

// this is the connection to the database
const pool = require("./db")

//Middleware
const cors = require('cors');

// const pino = require("express-pino-logger")();
const userRouter = require("./controllers/userController");

app.use(cors())
app.use(express.json());

// Test route. Delete at the end of the project
app.get("/", (req, res) => {
  res.send("Hello, Firestarters");
});

// Create a user // This is working
app.post("/users", async (req, res) => {
  try {
    // Input as JSON with double quotes
    const { username, firstname, lastname, email, passwordDigest} = req.body;
    const newUser = await pool.query(
      `INSERT INTO users (username, firstname, lastname, email, "passwordDigest") VALUES($1, $2, $3, $4, $5)`,
      [username, firstname, lastname, email, passwordDigest]
    );

    res.json("New user created");
  } catch (err) {
    console.error(err.message + "error creating new user");
  }
});

// Get one user by id // this is working
app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      id
    ]);

    res.json(user.rows[0]);
    console.log(`user.rows[0] = ${user.rows[0]}`)
  } catch (err) {
    console.error(`user/:id err.message = ${err.message}`);
  }
});

//Get all users // This is working; console.log = key/value as objects
app.get("/users", async (req, res) => {
  try {

    const allUsers = await pool.query("SELECT * FROM users");
    
    res.json(allUsers.rows);

    console.log(`allUsers = ${allUsers.rows}`)
  
  } catch (err) {
    console.error(err.message);
  }
});

// Delete a user // this is working
app.delete("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query("DELETE FROM users WHERE user_id = $1", [
      id
    ]);
    res.json("User was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

// Controllers
app.use("/user", userRouter);
// app.use('/profile', userController)
// app.use('/login', require ('./controllers/userController'))
// app.use('/createaccount', userController)

///I am not sure what the below routes are for so I commented then out until we get the other routes working

// app.use('/api/payment', require('./controllers/paymentController'))

// app.get('/', (req, res) => {
//   const name = req.query.name || 'World';
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

app.listen(process.env.BE_PORT, () => {
  console.log(`Server is burnin' on ${process.env.BE_PORT}`);
});

// // THis is to help debug from seqeulize
// const sequelize = new Sequelize('seqeulize', {
//   // Choose one of the logging options
//   logging: (...msg) => console.log(msg), // Displays all log function call parameters
//   logging: msg => logger.debug(msg),     // Use custom logger (e.g. Winston or Bunyan), displays the first parameter
//   logging: logger.debug.bind(logger)     // Alternative way to use custom logger, displays all messages
// });
