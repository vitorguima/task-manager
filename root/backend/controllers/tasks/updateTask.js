const { updateTask } = require('../../services/tasks/updateTask');

const updateTaskById = async (req, res) => {
  const task = await updateTask(req.params.taskId);

  if (task.message) {
    return res.status(400).json(task.message);
  }

  return res.status(200).json(task);
}

module.exports = {
  updateTaskById,
}