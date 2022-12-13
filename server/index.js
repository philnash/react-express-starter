const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

//Controllers
app.use('/api/users', require('./controllers/usersController'))
app.use('/api/payment', require('./controllers/paymentController'))

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`)
})