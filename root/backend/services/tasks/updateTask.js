const { updateById } = require('../../models/tasks/updateTask');

const updateTask = async (taskId) => {
  const project = await updateById(taskId);

  return project;
}

module.exports = {
  updateTask,
}
