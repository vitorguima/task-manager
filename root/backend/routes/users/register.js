const router = require('express').Router();

const createUser = require('../../controllers/users/createUser');

router.post('/register',
  createUser);

module.exports = router;
