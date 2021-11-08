import React from 'react';

import { Link } from 'react-router-dom';

import LoginForm from '../components/LoginForm';

export default function Home() {
  return (
    <div>
      <LoginForm />
      <Link to="/register">
        <button
          type="button"
        >
          Sign up
        </button>
      </Link>
    </div>
  )
}
