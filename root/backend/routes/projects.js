const router = require('express').Router();

const { validateSession } = require('../middlewares/sessions/validateSession');
const { getAllProjects } = require('../controllers/projects/getProjects');
const { createProject } = require('../controllers/projects/createProject');
const { findProjectById } = require('../controllers/projects/getProjectById');

// return all projects based on an an especific userId
router.get('/projects',
  validateSession,
  getAllProjects);
// endpoint to create a new project (this is where a user will register a new project)
router.post('/projects',
  validateSession,
  createProject);
// return the project details page (with the tasks it contains)
router.get('/projects/:projectId',
  validateSession,
  findProjectById);

module.exports = router;
