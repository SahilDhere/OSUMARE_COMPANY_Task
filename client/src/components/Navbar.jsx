import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const category = () => {
    navigate('/categories')
    setShowMenu(false)
  }

  const contact = () => {
    navigate('/contact')
    setShowMenu(false)
  }

  const home = () => {
    navigate('/')
    setShowMenu(false)
  }

  const about = () => {
    navigate('/about')
    setShowMenu(false)
  }

  return (
    <>
      <nav className="bg-white fixed w-full z-20">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Left: Logo */}
            <div className="flex items-start">
              <Link to="/" className="text-2xl font-bold text-blue-600">
                <img src="https://img.freepik.com/premium-vector/list-logo-character-vector-illustration-art-paper_567062-291.jpg" alt="Logo" className="h-15 w-auto " />
              </Link>
            </div>

            {/* Right: Desktop View */}
            <div className="hidden md:flex items-center space-x-6 gap-7">
              <NavLink to="/" className={({ isActive }) =>
                isActive
                  ? 'text-green-500 font-semibold'
                  : 'text-gray-800'
              }>HOME</NavLink>

              <NavLink to={!isLogin ? "/signup" : "/about"} className={({ isActive }) =>
                isActive
                  ? 'text-green-500 font-semibold'
                  : 'text-gray-800'
              }>ABOUT</NavLink>
              
              <NavLink to={!isLogin ? "/signup" : "/categories"} className={({ isActive }) =>
                isActive
                  ? 'text-green-500 font-semibold'
                  : 'text-gray-800'
              }>CATEGORIES</NavLink>
              
              <NavLink to={!isLogin ? '/signup' : "/contact"} className={({ isActive }) =>
                isActive
                  ? 'text-green-500 font-semibold'
                  : 'text-gray-800'
              }>CONTACT</NavLink>


              <div className="absolute top-3 right-6 z-50">
                  <button onClick={() => navigate('/signup')} className='bg-red-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'>
                    Sign Up
                  </button>
              </div>
            </div>

            {/* Mobile View Top Bar */}
            <div className="md:hidden flex items-center space-x-10">
              <button onClick={() => navigate('/signup')} className='bg-red-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'>
                    Sign Up
                  </button>
              <button onClick={() => setShowMenu(!showMenu)} className="focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>


          </div>
        </div>

        {showMenu && (
          <div className="md:hidden bg-white px-4 pb-4 space-y-2 border-t border-gray-200">
            <NavLink to="/" className={({ isActive }) =>
              `block ${isActive ? 'text-green-500 font-semibold' : 'text-gray-700'} hover:text-blue-600`
            } onClick={home}>HOME</NavLink>

            <NavLink to={!isLogin ? "/signup" : "/about"} className={({ isActive }) =>
              `block ${isActive ? 'text-green-500 font-semibold' : 'text-gray-700'} hover:text-blue-600`
            } onClick={about}>ABOUT</NavLink>

            <NavLink to={!isLogin ? "/signup" : "/categories"} className={({ isActive }) =>
              `block ${isActive ? 'text-green-500 font-semibold' : 'text-gray-700'} hover:text-blue-600`
            } onClick={category}>CATEGORIES</NavLink>

            <NavLink to={!isLogin ? '/signup' : '/contact'} className={({ isActive }) =>
              `block ${isActive ? 'text-green-500 font-semibold' : 'text-gray-700'} hover:text-blue-600`
            } onClick={contact}>CONTACT</NavLink>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
