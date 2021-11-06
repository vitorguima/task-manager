import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import LogoutButton from '../components/LogoutButton';

import CreateProject from '../components/CreateProject';
import ProjectCard from '../components/ProjectCard';

import axios from 'axios';

import { Redirect } from 'react-router-dom';

const POSTS_ENDPOINT = 'http://localhost:4000/projects';

// render the project cards (arrayOfTasks.map())
// each task card will have a button to redirect to TasksOfProject
// tasksCard will contain the details of a registered task

function ProjectsFeed() {
  const [projects, setProjects] = useState();
  const [error, setError ] = useState();
  const [removedProjects, setRemovedProjects] = useState(0);
  const [submitedProjects, setSubmitedProjects] = useState(0);

  const renderProjectCards = (projects) => {
    return (
      projects.map(({ name, description, _id: id, userId }, index) => 
      <ProjectCard
        userId={ userId }
        id={ id }
        key={index}
        name={name} 
        description={description}
        removedProjects={removedProjects}
        setRemovedProjects={setRemovedProjects}
      />)
    )
  }

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await axios({
          method: 'GET',
          withCredentials: true,
          url: POSTS_ENDPOINT,
        })

        if (response.data.length > 0) {
          setProjects(response.data);
        }

        if (!response.data.length) {
          setProjects();
        }
      } catch (err) {
        setError(err.response.data)
      }
    };

    getProjects();
  }, [removedProjects, submitedProjects]);

    return (
      <div>
        <LogoutButton />
        <CreateProject
          submitedProjects={submitedProjects}
          setSubmitedProjects={setSubmitedProjects}
        />
        { projects ? renderProjectCards(projects) : null}
        { error ? <Redirect to="/" /> : null }
      </div>
    )

}

const mapStateToProps = (state) => ({
  userData: state.userData.userData,
});

export default connect(mapStateToProps)(ProjectsFeed)