import React from 'react';

import { Link } from 'react-router-dom';

export default function ProjectCard(props) {
  const {
    name,
    description,
    id,
  } = props;
  return (
    <div>
      <p>{ name }</p>
      <p>{ description }</p>
      <Link to={`/details/${id}`}>
        <button
          type="button"
        >
          detalhes
        </button>
      </Link>
    </div>
  )
}
