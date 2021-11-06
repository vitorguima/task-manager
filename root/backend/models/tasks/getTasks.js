const connection = require('../../models/connection/mongodb');

const findTasksByProjectId = async (id) => {
  const idToString = id.toString();
  try {
    const user = await connection()
      .then((db) => db.collection('tasks')
      .find({ projectId: { $eq: idToString } }).toArray());
    return user;
  } catch (_err) {
    return {
      message: 'Unexpected error. Please try again.'
    }
  }
}

module.exports = {
  findTasksByProjectId,
}
