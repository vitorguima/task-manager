import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import CreateProject from '../components/CreateProject';
import ProjectCard from '../components/ProjectCard';

import axios from 'axios';

import { Redirect } from 'react-router-dom';
import Header from '../components/Header';

const POSTS_ENDPOINT = 'http://localhost:4000/projects';

function ProjectsFeed() {
  const [projects, setProjects] = useState();
  const [error, setError ] = useState();
  const [removedProjects, setRemovedProjects] = useState(0);
  const [submitedProjects, setSubmitedProjects] = useState(0);
  const [updatedProjects, setUpdatedProjects] = useState(0);

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
        updatedProjects={updatedProjects}
        setUpdatedProjects={setUpdatedProjects}
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
  }, [removedProjects, submitedProjects, updatedProjects]);

    return (
      <div className="flex-row">
        <Header />
        <CreateProject
          submitedProjects={submitedProjects}
          setSubmitedProjects={setSubmitedProjects}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          { projects ? renderProjectCards(projects) : null}
        </div>
        { error ? <Redirect to="/" /> : null }
      </div>
    )

}

const mapStateToProps = (state) => ({
  userData: state.userData.userData,
});

export default connect(mapStateToProps)(ProjectsFeed)