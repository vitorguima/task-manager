const { findById } = require('../../models/projects/getProjectById');

const findProject = async (projectId) => {
  const project = await findById(projectId);

  return project;
}

module.exports = {
  findProject,
}
