const { removeById } = require('../../models/projects/deleteProject');

const removeProject = async (projectId) => {
  const removedProject = await removeById(projectId);

  return removedProject;
}

module.exports = {
  removeProject,
}