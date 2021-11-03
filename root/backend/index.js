const express = require('express');

const connection = require('./models/connection/mongodb');

const session = require('express-session');

const cors = require('cors');

const MongoStore = require('connect-mongo')(session);

const register = require('./routes/users/register');
const authentication = require('./routes/users/authentication');
const passport = require('passport');

const app = express();

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());  

const sessionStore = new MongoStore({
  mongoConnection: connection,
  collection: 'sessions',
  url: process.env.MONGO_DB_URL,
});

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
}));

require('./config/passport');

app.use(passport.initialize());
app.use(passport.session());

app.use(register);
app.use(authentication);

app.listen(3000);
