const { createProject } = require('../../models/projects/createProject');

const insertNewProject = async (data) => {
  const newProject = await createProject(data);

  return newProject;
}

module.exports = {
  insertNewProject,
};
