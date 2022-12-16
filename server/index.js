require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const pino = require('express-pino-logger')();
const app = express();
const {Sequelize } = require ('Sequelize')
// const userController = require('./controllers')

require('dotenv').config();


app.use(bodyParser.json());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use(pino);
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

//Controllers
app.use('/user', userController)
// app.use('/api/payment', require('./controllers/paymentController'))

//Delete this route once working 
app.get('/', (req, res) =>{
  res.send('Hello, Firestarters')
})
// Controllers
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

app.listen(process.env.PORT, () => {
  console.log(`Burnin' on ${process.env.PORT}`)
})