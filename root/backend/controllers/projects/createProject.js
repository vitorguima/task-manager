const { insertNewProject } = require('../../services/projects/creteProjects');

const createProject = async (req, res) => {
  const data = req.body;
  const newProject = await insertNewProject(data);

  if (newProject.message) {
    return res.status(400).json(newProject.message);
  }

  return res.status(200).json(newProject);
}

module.exports = {
  createProject,
}
