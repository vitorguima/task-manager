const { findTasksByProjectId } = require('../../models/tasks/getTasks');

const getTasks = async (id) => {
  const tasks = await findTasksByProjectId(id);

  return tasks;
}

module.exports = {
  getTasks,
}