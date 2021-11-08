const connection = require('../../models/connection/mongodb');
const { ObjectId } = require('mongodb');

const updateById = async (taskId) => {
  try {
    const updatedTask = await connection()
    .then((db) => db.collection('Tasks')
    .updateOne({ _id: { $eq: ObjectId(taskId) } }, { $set: { ...data } }));

  return updatedTask;
  } catch (_err) {
    return {
      message: 'No tasks found. Check the projectId',
    }
  }
}

module.exports = {
  updateById,
}