import React from 'react'

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import axios from 'axios';

import { submitLogout } from '../actions/authentication';

const REACT_APP_ENDPOINT = process.env.REACT_APP_ENDPOINT;

const requestLogout = async () => {
  await axios({
    method: 'GET',
    withCredentials: true,
    url: `${REACT_APP_ENDPOINT}/logout`
  });
}

function LogoutButton({ dispatchLogout }) {
  const executeLogout = async () => {
    await requestLogout();
    dispatchLogout();
  };

  return (
    <Link to="/">
      <button
        type="button"
        name="logout"
        onClick={ () => executeLogout() }
      >
        Logout
      </button>
    </Link>
  )
}

const mapDispatchToProps = (dispatch) => ({
  dispatchLogout: () => dispatch(submitLogout()),
})

export default connect(null, mapDispatchToProps)(LogoutButton);
