const express = require('express');
const app = express();

require('dotenv').config();

// this is the connection to the database using pguri
const db = require('./config/database')

//Middleware
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const cors = require('cors')

//Testing the connection to the db
db.authenticate()
.then(()=> (console.log`Database connected...`))
.catch(err =>console.log('Error' + err))

// app.use(bodyParser.json());
// app.use(express.static('public'))
// app.use(express.urlencoded(
//   // { extended: true }
//   ))

const userRouter = require('./controllers/userController')

//This route is so that you know when your route is working. Delete this route at then end of the project 
app.get('/', (req, res) =>{
  res.send('Hello, Firestarters')
})

// Controllers
app.use('/user', userRouter)
// app.use('/profile', userController)
// app.use('/login', require ('./controllers/userController'))
// app.use('/createaccount', userController)

//Database connection
//This is used for Sequelize-CLI, and is not used when using the Models. Please do not delete this until the end of the project. 
// try {
//   sequelize.authenticate()
//   console.log(`Connected with Sequelize at ${process.env.PG_URI}`)
// }catch(err){
//   console.log(`Unable to connect to PG: ${err}`)
// }



///I am not sure what the below routes are for so I commented then out until we get the other routes working

// app.use('/api/payment', require('./controllers/paymentController'))

///I am not sure what the below routes are for so I commented then out until we get the other routes working

// app.use('/api/payment', require('./controllers/paymentController'))

// app.get('/', (req, res) => {
//   const name = req.query.name || 'World';
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

app.listen(process.env.BE_PORT, () => {
  console.log(`Burnin' on ${process.env.BE_PORT}`)
})