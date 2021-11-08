const connection = require('../../models/connection/mongodb');
const { ObjectId } = require('mongodb');

const removeById = async (taskId) => {
  try {
    const removedProject = await connection()
      .then((db) => db.collection('tasks')
      .deleteOne({ _id: { $eq: ObjectId(taskId) } }));

    return removedProject;
  } catch (_err) {
    return {
      message: 'No tasks found. Check the projectId',
    }
  }
}

module.exports = {
  removeById,
};
