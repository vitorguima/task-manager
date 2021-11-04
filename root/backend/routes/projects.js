const router = require('express').Router();

const { validateSession } = require('../middlewares/sessions/validateSession');
const { getAllProjects } = require('../controllers/projects/getProjects');
const { createProject } = require('../controllers/projects/createProject');

router.get('/projects',
  validateSession,
  getAllProjects);

router.post('/projects',
  validateSession,
  createProject);

module.exports = router;
