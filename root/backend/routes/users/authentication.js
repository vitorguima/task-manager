const router = require('express').Router();

const passport = require('passport');

router.post('/register',
  passport.authenticate('local'));

module.exports = router;
