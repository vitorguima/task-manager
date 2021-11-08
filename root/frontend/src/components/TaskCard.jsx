import React from 'react';

import axios from 'axios';

const REMOVE_PROJECT_ENDPOINT = 'http://localhost:4000/tasks';

export default function TaskCard(props) {
  const {
    name,
    description,
    taskState,
    id,
    removedTasks,
    setRemovedTasks,
  } = props;

  const submitDelete = async () => {
    await axios({
      method: 'DELETE',
      withCredentials: true,
      url: `${REMOVE_PROJECT_ENDPOINT}/${id}`,
    });

    setRemovedTasks(removedTasks + 1);
  }
  
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{taskState}</p>
      <button
        id={id}
        onClick={ () => submitDelete() }
      >
        Remover
      </button>
    </div>
  )
}
