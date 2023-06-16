import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { featured } from '../../data/featured';
import { authors } from '../../data/authors';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import Categories from './Categories';
import Ad from './Ad';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Adjust the number of items per page as needed

  // Calculate the total number of pages
  const totalPages = Math.ceil(featured.length / itemsPerPage);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page's data
  const currentData = featured.slice(startIndex, endIndex);

  // Handle page navigation
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className='mt-20 mb-[100px]'>
      <div className='px-5 grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl mx-auto mt-12 gap-10'>
        <div className='lg:col-span-2'>
          <h2 className='font-medium'>
            <span className='bg-emerald-600 text-white uppercase text-lg p-2'>
              Recently
            </span>{' '}
            Posted
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {currentData.map(({ id, tag, title, author }) => (
              <div
                key={id}
                className=' bg-white mt-10 rounded-lg flex flex-col gap-5'>
                <div className='img bg-gray-400 w-full h-[260px] rounded-lg'>
                <img className='w-full h-full rounded-lg object-cover' src="/assets/scenery.jpg" alt="scenery" />
                </div>
                <div className='content'>
                  <span className='tag bg-green-50 text-xs py-1 px-3 rounded-lg'>
                    {tag}
                  </span>
                  <div className='title text-lg md:text-xl lg:text-2xl font-medium w-[85%] mt-2 line-clamp-2'>
                    {title}
                  </div>
                  <div className='flex items-center justify-between my-4 text-xs w-[85%] '>
                    <div className='author line-clamp-1'>
                      <FontAwesomeIcon icon={faPerson} /> &nbsp;&nbsp;{author}
                    </div>
                    <div>|</div>
                    <div className='date line-clamp-1'>
                      <FontAwesomeIcon icon={faCalendar} />
                      &nbsp;&nbsp; 02 December 2022
                    </div>
                    <div>|</div>
                    <div className='time line-clamp-1'>
                      <FontAwesomeIcon icon={faClock} />
                      &nbsp;&nbsp; 3 Min. To Read
                    </div>
                  </div>
                  <p className='text-sm lg:text-[15px] w-[85%] line-clamp-2'>
                    Did you come here for something in particular or just
                    general Riker-bashing
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Render pagination buttons */}
          <div className='mt-20 flex justify-center gap-4'>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index + 1)}
                className={`border border-gray-200 py-2 rounded-md px-4 ${
                  currentPage === index + 1 ? 'bg-emerald-600 text-white' : ''
                }`}>
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        <div className='lg:col-span-1'>
          <h2 className='font-medium'>
            <span className='bg-emerald-600 text-white uppercase text-lg p-2'>
              Top
            </span>{' '}
            Authors
          </h2>
          {authors.map(({ id, name, hobbies }) => (
            <div key={id} className='flex items-center gap-8 mt-10'>
              <div className='image w-20 h-20 bg-gray-400 rounded-full'>
                <img className='w-full h-full rounded-full object-cover' src="/assets/jessica.jpg" alt="author" />
              </div>
              <div className='content max-w-[50%] space-y-2'>
                <div className='name font-semibold text-[17px]'>{name}</div>
                <div className='hobbies line-clamp-2 text-xs font-light'>
                  {hobbies}
                </div>
                <div className='social space-x-3 cursor-pointer '>
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    className='hover:scale-105 text-xl transition-all'
                  />
                  <FontAwesomeIcon
                    icon={faTwitterSquare}
                    className='hover:scale-105 text-xl transition-all'
                  />
                  <FontAwesomeIcon
                    icon={faInstagramSquare}
                    className='hover:scale-105 text-xl transition-all'
                  />
                </div>
              </div>
            </div>
          ))}
          <Ad />
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Blog;
