const { removeProject } = require('../../services/projects/deleteProject');

const removeProjectById = async (req, res) => {
  const removedProject = await removeProject(req.params.projectId);

  if (removedProject.message) {
    return res.status(400).json(removedProject.message);
  }

  return res.status(200).json(removedProject);
}

module.exports = {
  removeProjectById,
}