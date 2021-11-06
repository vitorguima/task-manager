const connection = require('../../models/connection/mongodb');
const { ObjectId } = require('mongodb');

const removeById = async (projectId) => {
  try {
    const removedProject = await connection()
      .then((db) => db.collection('projects')
      .deleteOne({ _id: { $eq: ObjectId(projectId) } }));

    return removedProject;
  } catch (_err) {
    return {
      message: 'No projects found. Check the projectId',
    }
  }
}

module.exports = {
  removeById,
};
