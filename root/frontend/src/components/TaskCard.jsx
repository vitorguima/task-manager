import React, { useState } from 'react';

import axios from 'axios';

const TASK_ENDPOINT = 'http://localhost:4000/tasks';

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
      url: `${TASK_ENDPOINT}/${id}`,
    });

    setIsEditing(false);
    setUpdatedTasks(updatedTasks + 1);
  }

  const submitDelete = async () => {
    await axios({
      method: 'DELETE',
      withCredentials: true,
      url: `${TASK_ENDPOINT}/${id}`,
    });

    setRemovedTasks(removedTasks + 1);
  }

  const notEditingTask = () => {
    return (
      <div>
        <p>{name}</p>
        <p>{description}</p>
        <p>{taskState}</p>
        <button
          onClick={ () => submitDelete() }
        >
          Remover
        </button>
        <button
          type="button"
          onClick={ () => startEdit() }
        >
          Edit
        </button>
      </div>
    )
  }

  const editingTask = () => {
    return (
      <div>
        <input 
          name="name"
          value={ newName }
          onChange={ ({ target }) => setNewName(target.value) }
        />
        <input 
          name="description"
          value={ newDescription }
          onChange={ ({ target }) => setNewDescription(target.value) }
        />
        <select value={ newState } onChange={ ({ target }) => setNewState(target.value)}>
          <option value="toDo">To do</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        <button
          type="button"
          onClick={ () => submitUpdate(id) }
        >
          Save
        </button>
        <button
          type="button"
          onClick={ () => setIsEditing(false) }
        >
          Cancel
        </button>
      </div>
    )
  }
  
  return (
    <div>
      { !isEditing ? notEditingTask() : editingTask() }
    </div>
  )
}
