import React from 'react'

import { connect } from 'react-redux';

import axios from 'axios';

import { submitLogout } from '../actions/index';

const LOGOUT_ENDPOINT = 'http://localhost:4000/logout';

const requestLogout = async () => {
  await axios({
    method: 'GET',
    withCredentials: true,
    url: LOGOUT_ENDPOINT,
  });
}

function LogoutButton({ dispatchLogout }) {
  const executeLogout = async () => {
    await requestLogout();
    dispatchLogout();
  }

  return (
    <div>
      <button
        type="button"
        name="logout"
        onClick={ () => executeLogout() }
      >
        Logout
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  dispatchLogout: () => dispatch(submitLogout()),
})

export default connect(null, mapDispatchToProps)(LogoutButton);
