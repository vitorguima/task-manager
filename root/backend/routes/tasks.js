const router = require('express').Router();

const { validateSession } = require('../middlewares/sessions/validateSession');
const { createTask } = require('../controllers/tasks/createTask');
const { getAllTasks } = require('../controllers/tasks/getTasks');
const { updateTaskById } = require('../controllers/tasks/updateTask');
const { removeTaskById } = require('../controllers/tasks/deleteTask');

// return all tasks based on an an especific projectId
router.get('/tasks/:projectId',
  validateSession,
  getAllTasks)

// endpoint to create a new task (this is where a user will register a new project)
router.post('/tasks',
  validateSession,
  createTask);

// endpoint to update a task
router.put('/tasks/:taskId',
  validateSession,
  updateTaskById);

router.delete('/tasks/:taskId', 
  validateSession,
  removeTaskById)

module.exports = router;
