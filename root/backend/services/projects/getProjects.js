const { findProjectsByUserId } = require('../../models/projects/getProjects');

const getProjects = async (id) => {
  const projects = await findProjectsByUserId(id);
  
  return projects;
}

module.exports = {
  getProjects,
}