require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const pino = require('express-pino-logger')();
const app = express();

const userController = require('./controllers/userController')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

//Controllers
app.use('/user', userController)
// app.use('/api/payment', require('./controllers/paymentController'))

app.get('/', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`)
})