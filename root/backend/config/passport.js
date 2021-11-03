const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const {
  findByUserName,
  findById,
} = require('../models/users/validateUser');

const { validPassword } = require('../helpers/passwordUtils');

const customFields = {
  usernameField: 'userName',
}

const verifyCallback =  async (username, password, done) => {
  try {
    const user = await findByUserName(username);

    if (!user) { return done(null, false) }

    const isValid = await validPassword(password, user.hashedPassword);
  
    if (isValid) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (err) {
    return done(err);
  }
}

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser(async (userId, done) => {
  try {
    const user = await findById(userId);
    done(null, user);
  } catch (err) {
    done(err);
  }
})
