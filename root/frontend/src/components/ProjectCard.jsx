import React from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

const REMOVE_PROJECT_ENDPOINT = 'http://localhost:4000/projects';

export default function ProjectCard(props) {
  const {
    name,
    description,
    id,
    removedProjects,
    setRemovedProjects,
  } = props;

  const submitDelete = async (projectId) => {
    await axios({
      method: 'DELETE',
      withCredentials: true,
      url: `${REMOVE_PROJECT_ENDPOINT}/${projectId}`,
    });

    setRemovedProjects(removedProjects + 1);
  }

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
    </div>
  )
}
