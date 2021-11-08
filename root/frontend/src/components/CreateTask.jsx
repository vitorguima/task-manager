import React, { useState } from 'react';

import { connect } from 'react-redux';

import { useLocation } from 'react-router-dom';

import axios from 'axios';

const CREATE_TASK_ENDPOINT = 'http://localhost:4000/tasks';

function CreateTask(props) {
  const {
    submitedTasks,
    setSubmitedTasks,
  } = props;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [state, setState] = useState('toDo');
  
  const currentLocation = useLocation();
  const currentPath = currentLocation.pathname;
  const projectId = currentPath.split('/')[2];

  const submitTask = async (name, description, taskState, projectId) => {
    const response = await axios({
      method: 'POST',
      data: {
        name,
        description,
        taskState,
        projectId,
      },
      withCredentials: true,
      url: `${CREATE_TASK_ENDPOINT}`,
    })

    setSubmitedTasks(submitedTasks + 1);
    return response;
  }

  return (
    <div>
      <form>
        <label>
          Task name
          <input 
            type="text"
            name="name"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label>
          Task description
          <input 
            type="text"
            name="description"
            value={ description }
            onChange={ ({ target }) => setDescription(target.value) }
          />
        </label>
        <label>
          Status
          <select value={ state } onChange={ ({ target }) => setState(target.value)}>
            <option value="toDo">To do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </label>
      </form>
      <button
        type="button"
        onClick={ () => submitTask(name, description, state, projectId) }
      >
        Create
      </button>
    </div>
  )
}

export default connect()(CreateTask)