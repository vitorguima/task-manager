import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

const REGISTER_ENDPOINT = 'http://localhost:4000/register'

const submitRegister = async (userName, password, firstName, lastName, email) => {
  const response = await axios({
    method: 'POST',
    data: {
      userName,
      password,
      firstName,
      lastName,
      email,
    },
    withCredentials: true,
    url: REGISTER_ENDPOINT,
  });

  return response;
}

export default function RegisterForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <form>
      <label>
          First name
          <input type="text" 
            name="firstName"
            value={ firstName }
            onChange={ ({ target }) => setFirstName(target.value) }
          />
        </label>
        <label>
          Last name
          <input type="text" 
            name="lastName"
            value={ lastName }
            onChange={ ({ target }) => setLastName(target.value) }
          />
        </label>
        <label>
          Email
          <input type="text" 
            name="email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
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
        onClick={ () => submitRegister(userName, password, firstName, lastName, email) }
      >
        Register
      </button>
      <Link to="/">
        <button
          type="button"
        >
          Sign in
        </button>
      </Link>
    </div>
  )
}