import React, { useState, useEffect } from 'react';

import { Redirect } from 'react-router';

import axios from 'axios';

const LOGIN_ENDPOINT = 'http://localhost:4000/login'

export default function LoginForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState();
  const [redirect, setRedirect] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const isUserAuthenticated = async () => {
      setIsLoading(true);
    
      const response = await axios({
        method: 'GET',
        withCredentials: true,
        url: 'http://localhost:4000/user',
      });

      if (response.data.user) {
        setUserData(response.data.user);
        setRedirect(true);
        setIsLoading(false);
      }

      if (!response.data.authentication) {
        setIsLoading(false);
      }
    }

    isUserAuthenticated();
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
      { redirect ? <Redirect to={`/tasks/${userData.id}`} /> : null }
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
        </div>
        : <p>Loading...</p>
      }
    </div>
  )
}
