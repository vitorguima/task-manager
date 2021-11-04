const passport = require('passport');

const startSession = (req, res, next) => {
  passport.authenticate('local', (err, user, _info) => {
    if (err) throw err;
    if (!user) res.send('No User Exists');
    else {
      req.logIn(user, (err) => {
        const {
          email,
          firstName,
          lastName,
          userName,
          _id: id,
        } = user;
        if (err) throw err;
        res.status(200).json({
          user: {
            email,
            firstName,
            lastName,
            userName,
            id,
          }
        });
      });
    }
  })(req, res, next);
}

const endSession = (req, res) => {
  req.logout();
  res.status(200).json({ authentication: false });
}

module.exports = {
  startSession,
  endSession,
}