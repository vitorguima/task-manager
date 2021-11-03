const router = require('express').Router();

const passport = require('passport');

router.get('/logout', (req, _res) => req.logout());

module.exports = router;
