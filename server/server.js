require("dotenv").config();
const express = require("express");
const app = express();

const db = require('./db/models')
// this is the connection to the database using pguri
// const connect = require("./db/config/database");


//Middleware
const cors = require('cors');
const bodyParser = require('body-parser');
const pino = require("express-pino-logger")();
const userRouter = require("./controllers/userController");
var corsOptions={
  origin:"http://localhost:3000" //this is the BE Server. may need to change
}

// Syncing the database
db.sequelize.sync({})
  .then(() => {
    console.log("Firestarter database is synced from server.js");
  })
  .catch((err) => {
    console.log("Database is not synced: " + err.message);
  });

app.use(express.json());
// app.use(express.static('public'))
app.use(express.urlencoded(
  { extended: true }
  ))
app.use(cors(corsOptions))

//This route is so that you know when your route is working. Delete this route at then end of the project
app.get("/", (req, res) => {
  res.send("Hello, Firestarters");
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
