const router = require('express').Router();

const { validateSession } = require('../middlewares/sessions/validateSession');
const { createTask } = require('../controllers/tasks/createTask');
const { getAllTasks } = require('../controllers/tasks/getTasks');

// return all tasks based on an an especific projectId
router.get('/tasks/:projectId',
  validateSession,
  getAllTasks)

// endpoint to create a new task (this is where a user will register a new project)
router.post('/tasks',
  validateSession,
  createTask);

router.put('/tasks/:taskId',
  validateSession);

router.delete('/tasks/:taskId', 
  validateSession)

module.exports = router;
