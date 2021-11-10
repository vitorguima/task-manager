import React, { useState } from 'react';

import { connect } from 'react-redux';

import { useLocation } from 'react-router-dom';

import axios from 'axios';

const CREATE_TASK_ENDPOINT = process.env.REACT_APP_CREATE_TASK_ENDPOINT;

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
      <form className="flex flex-col flex-wrap lg:flex-row max-w-9xl mx-auto px-4 bg-gray-300 items-center">
        <div className="flex flex-col flex-wrap lg:flex-row items-center">
        <label>
          Task name
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
          Task description
        </label>
        <input 
            type="text"
            name="description"
            value={ description }
            onChange={ ({ target }) => setDescription(target.value) }
            className="m-2"
          />
        </div>
        <div>
        <label>
          Status
        </label>
        <select 
          value={ state }
          onChange={ ({ target }) => setState(target.value)}
          className="m-2"
        >
            <option value="toDo">To do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </div>
        <button
        type="button"
        onClick={ () => submitTask(name, description, state, projectId) }
        className="m-1 rounded-lg px-3 py-3/4 bg-green-500 text-green-50 hover:bg-green-600 duration-300"
      >
        Create
      </button>
      </form>
    </div>
  )
}

export default connect()(CreateTask)