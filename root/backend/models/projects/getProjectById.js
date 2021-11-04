const connection = require('../../models/connection/mongodb');
const { ObjectId } = require('mongodb');

const findById = async (projectId) => {
  try {
    const project = await connection()
      .then((db) => db.collection('projects')
      .findOne({ _id: { $eq: ObjectId(projectId) } }));

    return project;
  } catch (_err) {
    return {
      message: 'No projects found. Check the projectId',
    }
  }
}

module.exports = {
  findById,
};
