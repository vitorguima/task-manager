import React, { useEffect, useState } from 'react';

import { useHistory , useLocation, Redirect } from 'react-router-dom';

import CreateTask from '../components/CreateTask';

import TaskCard from '../components/TaskCard';

import axios from 'axios';

const GET_TASKS_ENDPOINT = 'http://localhost:4000/tasks';

export default function ProjectDetails() {
  const [tasks, setTasks] = useState([]);
  const [submitedTasks, setSubmitedTasks] = useState(0);
  const [error, setError ] = useState();
  const [removedTasks, setRemovedTasks] = useState(0);

  const history = useHistory();
  const redirectToPreivous = () => history.goBack();
  const currentLocation = useLocation();
  const currentPath = currentLocation.pathname;
  const projectId = currentPath.split('/')[2];

  const renderTasksCard = (tasks) => {
    return (
      tasks.map(({ name, description, _id: id, taskState }, index) => 
      <TaskCard
        id={ id }
        key={index}
        name={name} 
        description={description}
        taskState={taskState}
        removedTasks={removedTasks}
        setRemovedTasks={setRemovedTasks}
      />)
    )
  }

  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await axios({
          method: 'GET',
          withCredentials: true,
          url: `${GET_TASKS_ENDPOINT}/${projectId}`,
        });

        if (response.data.length > 0) {
          setTasks(response.data);
        }

        if (!response.data.length) {
          setTasks();
        }
      } catch (err) {
        setError(err.response.data)
      }
    }

    getTasks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitedTasks, removedTasks])

  return (
    <div>
      <p>Project Details</p>
      <CreateTask
        submitedTasks={ submitedTasks }
        setSubmitedTasks={ setSubmitedTasks }
      />
      <button
        onClick={ () => redirectToPreivous() }
      >
        Projects
      </button>
      { tasks ? renderTasksCard(tasks) : null }
      { error ? <Redirect to="/" /> : null }
    </div>
  )
}
