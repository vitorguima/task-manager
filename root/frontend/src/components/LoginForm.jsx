import React, { useState } from 'react';
import axios from 'axios';

const LOGIN_ENDPOINT = 'http://localhost:4000/login'

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
  .then((response) => console.log(response));

  return response;
}

export default function LoginForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
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
      >
        Login
      </button>
    </div>
  )
}
