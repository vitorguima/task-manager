const { getProjects } = require('../../services/projects/getProjects');

const getAllProjects = async (req, res) => {
  const { _id: id } = req.user;

  const projects = await getProjects(id);

  if (projects.message) {
    return res.status(400).json(projects.message);
  }

  return res.status(200).json(projects);
}

module.exports = {
  getAllProjects,
}
