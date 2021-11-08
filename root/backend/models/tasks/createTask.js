const connection = require('../../models/connection/mongodb');

const createTask = async (data) => {
  try {
    const newTask = await connection()
      .then((db) => db.collection('tasks')
      .insertOne(data));

    return newTask;
  } catch (_err) {
    return {
      message: 'Unexpected error. Please try again.'
    }
  }
}

module.exports = {
  createTask,
};