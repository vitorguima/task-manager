import React, { useState } from 'react';
import axios from 'axios';

const LOGIN_ENDPOINT = 'http://localhost:3000/login'

const submitLogin = async (userName, password) => {
  await axios.post(LOGIN_ENDPOINT, {
    userName,
    password,
  })
  .then((response) => console.log(response));
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
        onSubmit={ () => submitLogin(userName, password) }
      >
        Login
      </button>
    </div>
  )
}
