const router = require('express').Router();

const passport = require('passport');

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, _info) => {
    if (err) throw err;
    if (!user) res.send('No User Exists');
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send('Successfully Authenticated');
      });
    }
  })(req, res, next);
});

module.exports = router;
