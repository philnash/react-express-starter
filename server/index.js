require('dotenv').config();
const express = require('express');
const app = express();

// the next line is used with the index.js file when creating models
// const sequelize = new Sequelize(process.env.PG_URI)

//Middleware
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const cors = require('cors')


// const userController = require('./controllers')

require('dotenv').config();


app.use(bodyParser.json());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

const {Sequelize } = require ('sequelize')
// const userController = require('./controllers')

//Database connection
//This is used for Sequelize-CLI, and is not used when using the Models. Please do not delete this until the end of the project. 
// try {
//   sequelize.authenticate()
//   console.log(`Connected with Sequelize at ${process.env.PG_URI}`)
// }catch(err){
//   console.log(`Unable to connect to PG: ${err}`)
// }

//Delete this route once working 
app.get('/', (req, res) =>{
  res.send('Hello, Firestarters')
})

// Controllers
// app.use('/user', userController)
// app.use('/profile', userController)
// app.use('/login', require ('./controllers/userController'))
// app.use('/createaccount', userController)

///I am not sure what the below routes are for so I commented then out until we get the other routes working

// app.use('/api/payment', require('./controllers/paymentController'))

///I am not sure what the below routes are for so I commented then out until we get the other routes working

// app.use('/api/payment', require('./controllers/paymentController'))

// app.get('/', (req, res) => {
//   const name = req.query.name || 'World';
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

app.listen(process.env.PORT, () => {
  console.log(`Burnin' on ${process.env.PORT}`)
})