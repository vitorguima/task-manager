import React from 'react';

import { Redirect } from 'react-router';

import { connect } from 'react-redux';

import LogoutButton from '../components/LogoutButton';

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