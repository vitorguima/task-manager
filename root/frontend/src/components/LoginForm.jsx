import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import { submitLogin } from '../actions/authentication';

import { Redirect } from 'react-router';

import axios from 'axios';

const LOGIN_ENDPOINT = 'http://localhost:4000/login';

function LoginForm({ userData, setUserData }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const isUserAuthenticated = async () => {
      setIsLoading(true);
      try {
        const response = await axios({
          method: 'GET',
          withCredentials: true,
          url: 'http://localhost:4000/user',
        });
  
        if (response.data.user) {
          setUserData(response.data.user);
          setIsLoading(false);
          setRedirect(true);
        }
      } catch (err) {
        setError(err.response.data);
        setIsLoading(false);
      }
    }

    isUserAuthenticated();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitLogin = async (userName, password) => {
    const response = await axios({
      method: 'POST',
      data: {
        userName,
        password,
      },
      withCredentials: true,
      url: LOGIN_ENDPOINT,
    })
  
    if (response.data.user) {
      setUserData(response.data.user);
      setRedirect(true);
    }
  }
  
  return (
    <div>
      { redirect ? <Redirect to={`/projects/${userData.id}`} /> : null }
      { !isloading ?
        <div>
          <form>
            <label>
              User name
              <input type="text" 
                name="userName"
                value={ userName }
                onChange={ ({ target }) => setUserName(target.value) }
              />
            </label>
            <label>
              Password
              <input type="password" 
                name="password"
                value={ password }
                onChange={ ({ target }) => setPassword(target.value) }
              />
            </label>
          </form>
          <button
            onClick={ () => submitLogin(userName, password) }
            type="button"
          >
            Login
          </button>
          { error ? <p>{ error.message }</p> : null }
        </div>
        : <p>Loading...</p>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  userData: state.userData.userData,
});

const mapDispatchToProps = (dispatch) => ({
  setUserData: (data) => dispatch(submitLogin(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
