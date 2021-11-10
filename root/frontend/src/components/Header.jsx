import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import LogoutButton from './LogoutButton';

export default function Header() {
  const [mobileMenuClass, setMobileMenuClass] = useState('mobile-menu hidden md:hidden');
  const showMobileMenu = () => {
    if (mobileMenuClass === 'mobile-menu hidden md:hidden') {
      return setMobileMenuClass('mobile-menu');
    }

    setMobileMenuClass('mobile-menu hidden md:hidden');
  }
  const history = useHistory();
  const redirectToPreivous = () => history.goBack();
  
    return (
      <nav className="bg-gray-100">
        <div className="max-w-9xl mx-auto px-4">
          <div className="flex justify-between">

            <div className="flex space-x-4">
              <div>
                <p className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  <span className="font-bold">Task manager</span>
                </p>
              </div>
              <div className="hidden md:flex">
              <button
                onClick={ () => redirectToPreivous() }
              >
                Projects
              </button>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <LogoutButton />
            </div>

            <div className="md:hidden flex items-center">
              <button
              onClick={() => showMobileMenu()}
              className="mobile-menu-button"
            >
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

          </div>
        </div>
        <div className={`mt-4${mobileMenuClass}`}>
        <div className="flex">
          <button
            onClick={ () => redirectToPreivous() }
          >
            Projects
          </button>
        </div>
         <LogoutButton />
        </div>
      </nav>
    )
  }
