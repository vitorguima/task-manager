const { removeTask } = require('../../services/tasks/deleteTask');

const removeTaskById = async (req, res) => {
  const removedTask = await removeTask(req.params.taskId);

  if (removedTask.message) {
    return res.status(400).json(removedTask.message);
  }

  return res.status(200).json(removedTask);
}

module.exports = {
  removeTaskById,
}