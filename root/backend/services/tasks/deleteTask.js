const { removeById } = require('../../models/tasks/deleteTask');

const removeTask = async (projectId) => {
  const removedTask = await removeById(projectId);

  return removedTask;
}

module.exports = {
  removeTask,
}