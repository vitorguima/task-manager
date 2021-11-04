const router = require('express').Router();

const { validateSession } = require('../middlewares/sessions/validateSession');
const { getAllProjects } = require('../controllers/projects/getProjects');

router.get('/projects',
  validateSession,
  getAllProjects);

module.exports = router;
