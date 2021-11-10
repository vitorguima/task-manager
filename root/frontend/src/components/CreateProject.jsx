import React, { useState } from 'react';

import { connect } from 'react-redux';

import { useLocation } from 'react-router-dom';

import axios from 'axios';

const CREATE_PROJECT_ENDPOINT = process.env.REACT_APP_CREATE_PROJECT_ENDPOINT;

function CreateProject(props) {
  const {
    submitedProjects,
    setSubmitedProjects,
  } = props;

  const submitProject = async (name, description, userId) => {
    const response = await axios({
      method: 'POST',
      data: {
        name,
        description,
        userId,
      },
      withCredentials: true,
      url: `${CREATE_PROJECT_ENDPOINT}`,
    })

    setSubmitedProjects(submitedProjects + 1);
  
    return response;
  }

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  
  const currentLocation = useLocation();
  const currentPath = currentLocation.pathname;
  const currentUserId = currentPath.split('/')[2];

  return (
    <div>
      <form className="flex flex-col flex-wrap lg:flex-row max-w-9xl mx-auto px-4 bg-gray-300 items-center">
        <div className="flex flex-col flex-wrap lg:flex-row items-center">
        <label>
          Project name
        </label>
          <input 
            type="text"
            name="name"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
            className="m-2"
          />
        </div>
        <div className="flex flex-col flex-wrap lg:flex-row items-center">
        <label>
          Project description
        </label>
          <input 
            type="text"
            name="description"
            value={ description }
            onChange={ ({ target }) => setDescription(target.value) }
            className="m-2"
          />
        </div>
        <button
        type="button"
        onClick={ () => submitProject(name, description, currentUserId) }
        className="m-1 rounded-lg px-3 py-3/4 bg-green-500 text-green-50 shadow hover:shadow-xl duration-300"
      >
        Create
      </button>
      </form>
    </div>
  )
}

export default connect()(CreateProject)
