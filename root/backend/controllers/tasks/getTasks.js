const { getTasks } = require('../../services/tasks/getTasks');

const getAllTasks = async (req, res) => {
  const { projectId } = req.params;

  const tasks = await getTasks(projectId);

  if (tasks.message) {
    return res.status(400).json(tasks.message);
  }

  return res.status(200).json(tasks);
}

module.exports = {
  getAllTasks,
}
