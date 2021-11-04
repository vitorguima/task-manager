const { findProject } = require('../../services/projects/getProjectById');

const findProjectById = async (req, res) => {
  const project = await findProject(req.body.id);

  if (project.message) {
    return res.status(400).json(project.message);
  }

  return res.status(200).json(project);
}

module.exports = {
  findProjectById,
}