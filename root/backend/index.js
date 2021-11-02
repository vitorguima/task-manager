const express = require('express');

const connection = require('./models/connection/mongodb');

const session = require('express-session');

const MongoStore = require('connect-mongo')(session);

const register = require('./routes/users/register');

const app = express();

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(register);

const sessionStore = new MongoStore({
  mongoConnection: connection,
  collection: 'sessions',
  url: process.env.MONGO_DB_URL,
});

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
}))

app.get('/', (req, res) => {
  if (req.session.viewCount) {
    req.session.viewCount = req.session.viewCount + 1;
  } else {
    req.session.viewCount = 1;
  }
  res.send(`<h1>Visit count: ${req.session.viewCount}</h1>`)
});

app.listen(3000);
