const { updateById } = require('../../models/projects/updateProject');

const updateProject = async (projectId) => {
  const project = await updateById(projectId);

  return project;
}

module.exports = {
  updateProject,
}
