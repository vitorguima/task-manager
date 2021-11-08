const { updateById } = require('../../models/projects/updateProject');

const updateProject = async (projectId, data) => {
  const project = await updateById(projectId, data);

  return project;
}

module.exports = {
  updateProject,
}
