import React from 'react';

import { Redirect } from 'react-router';

import { connect } from 'react-redux';

import LogoutButton from '../components/LogoutButton';

// render the project cards (arrayOfTasks.map())
// each task card will have a button to redirect to TasksOfProject
// tasksCard will contain the details of a registered task

function ProjectsFeed({ userData }) {
  return (
    <div>
      { userData.id ? <p>Projects Feed</p> : <Redirect to="/" /> }
      <LogoutButton />
    </div>
  )
}

const mapStateToProps = (state) => ({
  userData: state.userData.userData,
});

export default connect(mapStateToProps, null)(ProjectsFeed)