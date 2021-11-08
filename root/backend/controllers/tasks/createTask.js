const { insertNewTask } = require('../../services/tasks/createTask');

const createTask = async (req, res) => {
  const data = req.body;
  const newTask = await insertNewTask(data);

  if (newTask.message) {
    return res.status(400).json(newTask.message);
  }

  return res.status(200).json(newTask);
}

module.exports = {
  createTask,
}
