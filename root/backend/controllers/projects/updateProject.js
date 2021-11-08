const { updateProject } = require('../../services/projects/updateProject');

const updateProjectById = async (req, res) => {
  const project = await updateProject(req.params.projectId, req.body);

  if (project.message) {
    return res.status(400).json(project.message);
  }

  return res.status(200).json(project);
}

module.exports = {
  updateProjectById,
}