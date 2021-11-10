import React, { useState } from 'react';

import axios from 'axios';

const APP_ENDPOINT = process.env.REACT_APP_APP_ENDPOINT;

export default function TaskCard(props) {
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newState, setNewState] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const {
    name,
    description,
    taskState,
    id,
    removedTasks,
    setRemovedTasks,
    projectId,
    updatedTasks,
    setUpdatedTasks,
  } = props;

  const startEdit = () => {
    setIsEditing(true);
    setNewName(name);
    setNewDescription(description);
    setNewState(taskState);
  };

  const submitUpdate = async () => {
    await axios({
      method: 'PUT',
      data: {
        name: newName,
        description: newDescription,
        taskState: newState,
        projectId,
      },
      withCredentials: true,
      url: `${APP_ENDPOINT}/tasks/${id}`,
    });

    setIsEditing(false);
    setUpdatedTasks(updatedTasks + 1);
  }

  const submitDelete = async () => {
    await axios({
      method: 'DELETE',
      withCredentials: true,
      url: `${APP_ENDPOINT}/tasks/${id}`,
    });

    setRemovedTasks(removedTasks + 1);
  }

  const treatsTaskState = (state) => {
    if (state === 'toDo') {
      return 'To do'
    }

    return state
  }

  const notEditingTask = () => {
    return (
      <div
      className="max-w-lg mx-auto p-8 md:p-12"
      >
        <header className="bg-gray-100 rounded-t-lg font-bold text-l py-4 px-8 flex justify-between">
          <div>
          <p>{ name }</p>
          </div>
          <div>
          <p>{treatsTaskState(taskState)}</p>
          </div>
        </header>
        <div className="py-7 px-8">
        <p>{description}</p>
        <div className="flex space-x-1">
        <button
          onClick={ () => submitDelete() }
          className="mt-4 rounded-lg px-3 py-1 bg-red-500 text-red-50 shadow hover:shadow-xl duration-300"
        >
          Remover
        </button>
        <button
          type="button"
          onClick={ () => startEdit() }
          className="mt-4 rounded-lg px-3 py-1 bg-blue-500 text-blue-50 shadow hover:shadow-xl duration-300"
        >
          Edit
        </button>
        </div>
        </div>
        <footer className="rounded-b-lg bg-gray-100 text-sm text-gray-500 px-8 py-3 text-right">
          <p>Last update...</p>
        </footer>
      </div>
    )
  }

  const editingTask = () => {
    return (
      <div
      className="max-w-lg mx-auto p-8 md:p-12"
      >
        <header className="bg-gray-100 rounded-t-lg font-bold text-l py-4 px-8 flex justify-between">
        <div>
        <input 
          name="name"
          value={ newName }
          onChange={ ({ target }) => setNewName(target.value) }
        />
        </div>
        <div>
        <select value={ newState } onChange={ ({ target }) => setNewState(target.value)}>
          <option value="toDo">To do</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        </div>
        </header>
        <div className="py-7 px-8">
        <input 
          name="description"
          value={ newDescription }
          onChange={ ({ target }) => setNewDescription(target.value) }
        />
        <div className="flex space-x-1">
        <button
          type="button"
          onClick={ () => submitUpdate(id) }
          className="mt-4 rounded-lg px-3 py-1 bg-blue-500 text-blue-50 shadow hover:shadow-xl duration-300"
        >
          Save
        </button>
        <button
          type="button"
          onClick={ () => setIsEditing(false) }
          className="mt-4 rounded-lg px-3 py-1 bg-red-500 text-red-50 shadow hover:shadow-xl duration-300"
        >
          Cancel
        </button>
        </div>
        </div>
        <footer className="rounded-b-lg bg-gray-100 text-sm text-gray-500 px-8 py-3 text-right">
          <p>Last update...</p>
        </footer>
      </div>
    )
  }
  
  return (
    <div>
      { !isEditing ? notEditingTask() : editingTask() }
    </div>
  )
}
