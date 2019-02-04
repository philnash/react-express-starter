# React application with Express server

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Then an Express server was added in the `server` directory. The server is proxied via the `proxy` key in `package.json`.

This branch provides endpoints with basic [Access Tokens](https://www.twilio.com/docs/iam/access-tokens) for [Twilio Programmable Chat](https://www.twilio.com/docs/chat) and [Twilio Programmable Video](https://www.twilio.com/docs/video). You can use the project as a base for building React chat or video applications.

## Using this project

Clone the project, change into the directory and install the dependencies.

```bash
git clone https://github.com/philnash/react-express-starter.git
cd react-express-starter
npm install
```

Copy the `.env.example` file to `.env` and fill in with your Twilio credentials.

You can start the server on its own with the command:

```bash
npm run server
```

Run the React application on its own with the command:

```bash
npm start
```

Run both applications together with the command:

```bash
npm run dev
```

The React application will run on port 3000 and the server port 3001.

## Access token endpoints

There are three access token endpoints available via `GET` or `POST`. In all cases the token will be returned as a JSON response with one key: "token".

### Chat

You can get a chat token by making a `GET` request to `/chat/token` passing an identity as a query parameter.

e.g.

```javascript
fetch('/chat/token?identity=philnash')
  .then(res => res.json())
  .then(data => {
    console.log(data.token);
  });
```

You can also get a chat token by making a `POST` request to `/chat/token` passing the identity as a body parameter or as JSON.

e.g.

```javascript
// Form encoded
fetch('/chat/token', {
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  method: 'POST',
  body: 'identity=philnash'
})
  .then(res => res.json())
  .then(data => {
    console.log(data.token);
  });
```

```javascript
// JSON encoded
fetch('/chat/token', {
  headers: { 'Content-Type': 'application/json' },
  method: 'POST',
  body: JSON.stringify({ identity: 'philnash' })
})
  .then(res => res.json())
  .then(data => {
    console.log(data.token);
  });
```

### Video

You can get a video token by making a `GET` request to `/video/token` passing an identity as a query parameter.

e.g.

```javascript
fetch('/video/token?identity=philnash')
  .then(res => res.json())
  .then(data => {
    console.log(data.token);
  });
```

You can also pass a room parameter to limit the token's access to that room.

```javascript
fetch('/video/token?identity=philnash&room=burgundy')
  .then(res => res.json())
  .then(data => {
    console.log(data.token);
  });
```

You can also get a video token by making a `POST` request to `/video/token` passing the identity as a body parameter or as JSON.

e.g.

```javascript
// Form encoded
fetch('/video/token', {
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  method: 'POST',
  body: 'identity=philnash&room=burgundy'
})
  .then(res => res.json())
  .then(data => {
    console.log(data.token);
  });
```

```javascript
// JSON encoded
fetch('/video/token', {
  headers: { 'Content-Type': 'application/json' },
  method: 'POST',
  body: JSON.stringify({ identity: 'philnash', room: 'burgundy' })
})
  .then(res => res.json())
  .then(data => {
    console.log(data.token);
  });
```

### Voice

You can get a voice token by making a `GET` request to `/voice/token` passing an identity as a query parameter.

e.g.

```javascript
fetch('/voice/token?identity=philnash')
  .then(res => res.json())
  .then(data => {
    console.log(data.token);
  });
```

You can also get a voice token by making a `POST` request to `/voice/token` passing the identity as a body parameter or as JSON.

e.g.

```javascript
// Form encoded
fetch('/voice/token', {
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  method: 'POST',
  body: 'identity=philnash'
})
  .then(res => res.json())
  .then(data => {
    console.log(data.token);
  });
```

```javascript
// JSON encoded
fetch('/voice/token', {
  headers: { 'Content-Type': 'application/json' },
  method: 'POST',
  body: JSON.stringify({ identity: 'philnash' })
})
  .then(res => res.json())
  .then(data => {
    console.log(data.token);
  });
```
