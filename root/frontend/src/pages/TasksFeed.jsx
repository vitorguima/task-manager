import React from 'react';
import axios from 'axios';

const LOGOUT_ENDPOINT = 'http://localhost:4000/logout';
const submitLogout = async () => {
  await axios({
    method: 'GET',
    withCredentials: true,
    url: LOGOUT_ENDPOINT,
  });
}

export default function TasksFeed() {
  return (
    <div>
      <p>Tasks Feed</p>
      <button
        type="button"
        onClick={() => submitLogout()}
      >
        Logout
      </button>
    </div>
  )
}
