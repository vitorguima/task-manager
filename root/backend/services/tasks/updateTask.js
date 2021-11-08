const { updateById } = require('../../models/tasks/updateTask');

const updateTask = async (taskId, data) => {
  const project = await updateById(taskId, data);

  return project;
}

module.exports = {
  updateTask,
}
