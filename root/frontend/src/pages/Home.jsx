import React from 'react';

import { Link } from 'react-router-dom';

import LoginForm from '../components/LoginForm';

export default function Home() {
  return (
    <body className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0 bg-colors.cyan-400">
      <header className="max-w-lg mx-auto">
        <Link to="/">
            <h1 className="text-4xl font-bold text-center">Task manager</h1>
        </Link>
      </header>
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <h3 className="font-bold text-2xl">Welcome to Task manager</h3>
          <p className="text-gray-600 pt-2">Sign in to your account.</p>
        </section>
        <LoginForm />
      </main>

      <div className="max-w-lg mx-auto text-center mt-12 mb-6">
        <p>Don't have an account? <Link to="/register" className="font-bold hover:underline">Sign up</Link> </p>
      </div>
      
      <footer className="max-w-lg mx-auto flex justify-center">
        <p className="hover:underline">Contact</p>
        <span className="mx-3">•</span>
        <p className="hover:underline">Privacy</p>
    </footer>
    </body>
  )
}
