const connection = require('../../models/connection/mongodb');
const { ObjectId } = require('mongodb');

const updateById = async (projectId, data) => {
  try {
    const project = await connection()
    .then((db) => db.collection('projects')
    .updateOne({ _id: { $eq: ObjectId(projectId) } }, { $set: data }));

    return project;
  } catch (_err) {
    return {
      message: 'No projects found. Check the projectId',
    }
  }
}

module.exports = {
  updateById,
}