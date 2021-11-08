import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

const PROJECT_ENDPOINT = 'http://localhost:4000/projects';

export default function ProjectCard(props) {
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const {
    name,
    description,
    userId,
    id,
    removedProjects,
    setRemovedProjects,
    updatedProjects,
    setUpdatedProjects,
  } = props;

  const startEdit = () => {
    setIsEditing(true);
    setNewName(name);
    setNewDescription(description);
  }

  const submitUpdate = async (projectId) => {
    await axios({
      method: 'PUT',
      data: {
        name: newName,
        description: newDescription,
        userId,
      },
      withCredentials: true,
      url: `${PROJECT_ENDPOINT}/${projectId}`,
    });

    setIsEditing(false);
    setUpdatedProjects(updatedProjects + 1);
  }

  const finishEdit = async () => {
    await submitUpdate(id);
    setIsEditing(false);
    setUpdatedProjects(updatedProjects + 1);
  }

  const submitDelete = async (projectId) => {
    await axios({
      method: 'DELETE',
      withCredentials: true,
      url: `${PROJECT_ENDPOINT}/${projectId}`,
    });

    setRemovedProjects(removedProjects + 1);
  }

  const notEditingProject = () => {
    return (
      <div>
        <p>{ name }</p>
        <p>{ description }</p>
        <Link to={`/details/${id}`}>
          <button
            type="button"
          >
            Details
          </button>
        </Link>
        <button
          type="button"
          onClick={ () => submitDelete(id) }
        >
          Remove
        </button>
        <button
          type="button"
          onClick={ () => startEdit(true) }
        >
          Edit
        </button>
      </div>
    )
  }

  const editingProject = () => {
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
        <button
          type="button"
          onClick={ () => finishEdit() }
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
      { !isEditing ? notEditingProject() : editingProject() }
    </div>
  )
}
