const router = require('express').Router();

const { validateSession } = require('../middlewares/sessions/validateSession');

// return all tasks based on an an especific projectId
router.get('/tasks',
  validateSession)

// endpoint to create a new task (this is where a user will register a new project)
router.post('/tasks',
  validateSession);

router.put('/tasks/:taskId',
  validateSession);

router.delete('/tasks/:taskId', 
  validateSession)

module.exports = router;
