import React, { useState } from 'react';

import { connect } from 'react-redux';

import { useLocation } from 'react-router-dom';

import axios from 'axios';

const CREATE_PROJECT_ENDPOINT = 'http://localhost:4000/projects';

const submitProject = async (name, description, userId) => {
  console.log(userId);
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

  return response;
}

function CreateProject() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  
  const currentLocation = useLocation();
  const currentPath = currentLocation.pathname;
  const currentUserId = currentPath.split('/')[2];

  return (
    <div>
      <form>
        <label>
          Project name
          <input 
            type="text"
            name="name"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label>
          Project description
          <input 
            type="text"
            name="description"
            value={ description }
            onChange={ ({ target }) => setDescription(target.value) }
          />
        </label>
      </form>
      <button
        type="button"
        onClick={ () => submitProject(name, description, currentUserId) }
      >
        Create
      </button>
    </div>
  )
}

export default connect()(CreateProject)
