const { createTask } = require('../../models/tasks/createTask');

const insertNewTask = async (data) => {
  const newTask = await createTask(data);

  return newTask;
}

module.exports = {
  insertNewTask,
};
