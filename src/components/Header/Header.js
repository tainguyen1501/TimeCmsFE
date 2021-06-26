import React, { useState } from 'react';
import Toggle from '../Layout/themeToggle';

function Header() {
    const [showProfile, setShowProfile] = useState(false)
    return (
        <nav className="header fixed z-10 bg-white shadow-md dark:bg-gray-800 dark:text-white">
<div className="mx-auto px-2 sm:px-6 lg:px-4">
<div className="relative flex items-center justify-between h-16">
<i className='bx bx-menu-alt-left text-4xl cursor-pointer' ></i>
<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
<Toggle />
<div className="relative w-10 text-gray-600 dark:text-gray-400">
  <div className="absolute top-0 right-0 w-5 h-5 mr-1 -mt-3 rounded-full bg-red-500 text-white flex justify-center items-center text-xs">3</div>
  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
</div>

<div className="ml-3 relative">
  <div>
    <button onClick={() => setShowProfile(!showProfile)} type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
      <span className="sr-only">Open user menu</span>
      <img className="h-8 w-8 rounded-full" src="./avatar.png" alt="avatar"/>
    </button>
  </div>
  {
      showProfile &&
      <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700 dark:text-white" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
        <a href="/" className="block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
        <a href="/" className="block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
        <a href="/" className="block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
    </div>
  }
  
</div>
</div>
</div>
</div>
</nav>
    );
}

export default Header;