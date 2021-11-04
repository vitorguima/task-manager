const router = require('express').Router();

const {
  validateSession,
  getUser,
} = require('../../middlewares/sessions/validateSession');

const {
  startSession,
  endSession,
} = require('../../middlewares/sessions/defineSessionStatus');

router.post('/login',
  startSession);

router.get('/user',
  validateSession,
  getUser);

router.get('/logout',
  endSession);

module.exports = router;
