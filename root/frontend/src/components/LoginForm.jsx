import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import { submitLogin } from '../actions/authentication';

import { Redirect } from 'react-router';

import axios from 'axios';

const REACT_APP_ENDPOINT = process.env.REACT_APP_ENDPOINT;

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
          url: `${REACT_APP_ENDPOINT}/users`,
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
      url: `${REACT_APP_ENDPOINT}/login`,
    })
  
    if (response.data.user) {
      setUserData(response.data.user);
      setRedirect(true);
    }

    console.log(response);
  }

  const renderLoginForm = () => {
    return(
      <section className="mt-10">
      <form className="flex flex-col">
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                User name
              </label>
              <input type="text" 
                name="userName"
                value={ userName }
                onChange={ ({ target }) => setUserName(target.value) }
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
              />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                Password
              </label>
              <input
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
                type="password" 
                name="password"
                value={ password }
                onChange={ ({ target }) => setPassword(target.value) }
              />
            </div>
            <div className="flex justify-end">
                <p className="text-sm text-blue-600 hover:text-blue-700 hover:underline mb-6">Forgot your password?</p>
            </div>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              onClick={ () => submitLogin(userName, password) }
              type="button"
            >
              Login
            </button>
      </form>
      </section>
    )
  }
  
  return (
    <section className="mt-10">
      { redirect ? <Redirect to={`/projects/${userData.id}`} /> : null }
      { !isloading ? renderLoginForm( ): <p>Loading...</p> }
    </section>
  )
}

const mapStateToProps = (state) => ({
  userData: state.userData.userData,
});

const mapDispatchToProps = (dispatch) => ({
  setUserData: (data) => dispatch(submitLogin(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
