import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

const REACT_APP_ENDPOINT = process.env.REACT_APP_PROJECT_ENDPOIN;

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
      url: `${REACT_APP_ENDPOINT}/projects/${projectId}`,
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
      url: `${REACT_APP_ENDPOINT}/projects/${projectId}`,
    });

    setRemovedProjects(removedProjects + 1);
  }

  const notEditingProject = () => {
    return (
      <div
        className="max-w-lg mx-auto p-8 md:p-12 my-10"
      >
        <header className="bg-gray-100 rounded-t-lg font-bold text-2xl py-4 px-8">
          <p>{ name }</p>
        </header>
        <div className="py-7 px-8">
          <p>{ description }</p>
          <div className="flex space-x-1">
          <Link to={`/details/${id}`}>
            <button
              className="mt-4 rounded-lg px-3 py-1 bg-blue-500 text-blue-50 shadow hover:shadow-xl duration-300"
            >
              Details
            </button>
          </Link>
          <button
            type="button"
            onClick={ () => startEdit(true) }
            className="mt-4 rounded-lg px-3 py-1 bg-blue-500 text-blue-50 shadow hover:shadow-xl duration-300"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={ () => submitDelete(id) }
            className="mt-4 rounded-lg px-3 py-1 bg-red-500 text-red-50 shadow hover:shadow-xl duration-300"
          >
            Remove
          </button>
          </div>
        </div>
        <footer className="rounded-b-lg bg-gray-100 text-sm text-gray-500 px-8 py-3 text-right">
          Last update...
        </footer>
      </div>
    )
  }

  const editingProject = () => {
    return (
      <div
        className="max-w-lg mx-auto p-8 md:p-12 my-10"
      >
        <header className="bg-gray-100 rounded-t-lg font-bold text-2xl py-4 px-8">
          <input 
            name="name"
            value={ newName }
            onChange={ ({ target }) => setNewName(target.value) }
            className="w-5/6"
          />
        </header>
        <div className="py-7 px-8">
          <input 
            name="description"
            value={ newDescription }
            onChange={ ({ target }) => setNewDescription(target.value) }
            className="w-5/6"
          />
          <div className="flex space-x-1">
          <button
          type="button"
          onClick={ () => finishEdit() }
          className="mt-4 rounded-lg px-3 py-1 bg-green-500 text-green-50 shadow hover:shadow-xl duration-300"
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
          Last update...
        </footer>
      </div>
    )
  }

  return (
    <div>
      { !isEditing ? notEditingProject() : editingProject() }
    </div>
  )
}
