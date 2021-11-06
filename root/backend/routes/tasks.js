const router = require('express').Router();

const { validateSession } = require('../middlewares/sessions/validateSession');
const { createTask } = require('../controllers/tasks/createTask');

// return all tasks based on an an especific projectId
router.get('/tasks/:projectId',
  validateSession)

// endpoint to create a new task (this is where a user will register a new project)
router.post('/tasks',
  validateSession,
  createTask);

router.put('/tasks/:taskId',
  validateSession);

router.delete('/tasks/:taskId', 
  validateSession)

module.exports = router;
