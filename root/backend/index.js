const express = require('express');

const connection = require('./models/connection/mongodb');

const session = require('express-session');

const passport = require('passport');

const cors = require('cors');

const MongoStore = require('connect-mongo')(session);

const registerRoutes = require('./routes/users/register');
const authenticationRoutes = require('./routes/users/authentication');
const projectRoutes = require('./routes/projects');

const app = express();

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));  

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

app.use(registerRoutes);
app.use(authenticationRoutes);
app.use(projectRoutes);

app.listen(4000, () => {
  console.log("Running on PORT 4000.");
});
