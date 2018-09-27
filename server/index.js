const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
<<<<<<< HEAD
const pino = require('express-pino-logger')();
=======
const twilio = require('twilio');
const AccessToken = twilio.jwt.AccessToken;
const { ChatGrant, VideoGrant } = AccessToken;
>>>>>>> Adds basic chat and video token retrieval

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('/chat/token', (req, res) => {
  const identity = req.query.identity;
  const chatGrant = new ChatGrant({
    serviceSid: config.twilio.chatService
  });
  const token = new AccessToken(
    config.twilio.accountSid,
    config.twilio.apiKey,
    config.twilio.apiSecret
  );
  token.addGrant(chatGrant);
  token.identity = identity;
  res.set('Content-Type', 'application/json');
  res.send(
    JSON.stringify({
      token: token.toJwt()
    })
  );
});

app.get('/video/token', (req, res) => {
  const identity = req.query.identity;
  const room = req.query.room;
  let videoGrant;
  if (typeof room !== 'undefined') {
    videoGrant = new VideoGrant({ room });
  } else {
    videoGrant = new VideoGrant();
  }
  const token = new AccessToken(
    config.twilio.accountSid,
    config.twilio.apiKey,
    config.twilio.apiSecret
  );
  token.addGrant(videoGrant);
  token.identity = identity;
  res.set('Content-Type', 'application/json');
  res.send(
    JSON.stringify({
      token: token.toJwt()
    })
  );
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
