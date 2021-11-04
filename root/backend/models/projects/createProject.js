const connection = require('../../models/connection/mongodb');

const creteProject = async (data) => {
  try {
    const newProject = await connection()
      .then((db) => db.collection('projects')
      .insertOne(data));

    return newProject;
  } catch (_err) {
    return {
      message: 'Unexpected error. Please try again.'
    }
  }
}

module.exports = {
  creteProject,
};