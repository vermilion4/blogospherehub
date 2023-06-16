import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const Navbar = () => {
  return (
    <nav className='bg-emerald-50 text-[#1E1E1E] fixed top-0 w-full z-50'>
      <div className='h-[70px] max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-5'>
        <div className='middle font-bold'>
          <span className='bg-emerald-600 text-white uppercase text-xl p-2'>
            Blogosphere
          </span>
          Hub<span className='text-emerald-600'>.</span>
        </div>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          class='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-default'
          aria-expanded='false'>
          <span class='sr-only'>Open main menu</span>
          <svg
            class='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fill-rule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clip-rule='evenodd'></path>
          </svg>
        </button>
        <div
          className='start hidden w-full lg:block lg:w-auto'
          id='navbar-default'>
          <ul className='font-medium flex flex-col p-4 lg:p-0 mt-4  lg:flex-row lg:space-x-8 lg:mt-0 z-50 relative bg-emerald-600 rounded-lg lg:bg-transparent'>
            <li className='block py-2 pl-3 pr-4 text-white hover:text-emerald-600 hover:bg-white lg:hover:bg-transparent cursor-pointer lg:text-[#1E1E1E] transition-all'>
              <Link to='blog' smooth={true} duration={500}>
                Blog
              </Link>
            </li>
            <li className='block py-2 pl-3 pr-4 text-white hover:text-emerald-600 hover:bg-white lg:hover:bg-transparent cursor-pointer lg:text-[#1E1E1E] transition-all'>
              <Link to='news' smooth={true} duration={500}>
                News
              </Link>
            </li>
            <li className='block py-2 pl-3 pr-4 text-white hover:text-emerald-600 hover:bg-white lg:hover:bg-transparent cursor-pointer lg:text-[#1E1E1E] transition-all'>
              <Link to='events' smooth={true} duration={500}>
                Upcoming Events
              </Link>
            </li>
            <li className='block py-2 pl-3 pr-4 text-white hover:text-emerald-600 hover:bg-white lg:hover:bg-transparent cursor-pointer lg:text-[#1E1E1E] transition-all'>
              <Link to='jobs' smooth={true} duration={500}>
                Jobs
              </Link>
            </li>
          </ul>
        </div>
        <div className='end hidden lg:flex items-center lg:w-auto w-full gap-10'>
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faEdit} />
          Contact
          <FontAwesomeIcon icon={faSun} />
          <FontAwesomeIcon icon={faMoon} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
