import React, {useState} from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { featured } from '../data/featured';

const Hero = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Adjust the number of items per page as needed

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
    <div className='bg-[#f2f8f7] pb-10' id='blog'>
      <Navbar />
      <section className='px-5 grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl mx-auto pt-24 gap-10'>
        <div className='blog-left lg:col-span-2 h-[610px] overflow-y-scroll mb-10'>
          <h2 className='font-medium'>
            <span className='bg-emerald-600 text-white uppercase text-lg p-2'>
              Featured
            </span>{' '}
            This Month
          </h2>
          {
            featured.map(({id, tag, title, author}) => (
              <div key={id} className='h-[250px] bg-white mt-10 lg:mr-10 rounded-lg p-5 flex gap-5'>
              <div className='img bg-gray-400 min-w-[45%] sm:min-w-[200px] md:min-w-[250px] lg:min-w-[300px] w-1/2 h-full rounded-lg'>
                <img className='w-full h-full object-cover' src="/assets/javascript.jpg" alt="code" />
              </div>
              <div className='content'>
                <span className='tag bg-green-50 text-xs py-1 px-3 rounded-lg'>
                 {tag}
                </span>
                <div className='title text-lg md:text-xl lg:text-2xl font-medium w-[85%] mt-2 line-clamp-2'>
                  {title}
                </div>
                <div className='flex items-center justify-between my-4 text-xs w-[85%] '>
                  <div className='author line-clamp-1'><FontAwesomeIcon icon={faPerson} /> &nbsp;&nbsp;{author}</div>
                  <div>|</div>
                  <div className='date line-clamp-1'><FontAwesomeIcon icon={faCalendar} />&nbsp;&nbsp; 02 December 2022</div>
                  <div>|</div>
                  <div className='time line-clamp-1'><FontAwesomeIcon icon={faClock} />&nbsp;&nbsp; 3 Min. To Read</div>
                </div>
                <p className='text-sm lg:text-[15px] w-[85%] line-clamp-2'>
                  Did you come here for something in particular or just general
                  Riker-bashing
                </p>
              </div>
            </div>
            ))
          }
       
        </div>
        <div className='right lg:col-span-1 h-[500px] sm:max-w-[70vw] lg:max-w-full'>
          <h2 className='font-medium'>
            <span className='bg-emerald-600 text-white uppercase text-lg p-2'>
              Popular
            </span>{' '}
            Posted
          </h2>
          {
            currentData.map(({id, tag, title, author}) => (
              <div key={id} className='h-[115px] mt-10 rounded-lg flex gap-5'>
              <div className='img min-w-[150px] w-1/2 h-full rounded-lg bg-gray-400'>
              <img className='w-full h-full object-cover' src="/assets/blog-img.jpg" alt="laptop" />
              </div>
              <div className='content'>
                <span className='tag bg-green-50 text-xs py-1 px-3 rounded-lg'>
                 {tag}
                </span>
                <div className='title text-[17px] line-clamp-2 font-medium mt-2 max-w-[300px]'>
                  {title}
                </div>
                <div className='flex items-center justify-between my-4 text-xs gap-2'>
                  <div className='author line-clamp-1'><FontAwesomeIcon icon={faPerson} /> &nbsp;&nbsp;{author}</div>
                  <div>|</div>
                  <div className='date hidden md:line-clamp-1 lg:hidden'><FontAwesomeIcon icon={faCalendar} />&nbsp;&nbsp; 02 December 2022</div>
                  <div className='hidden md:block lg:hidden'>|</div>
                  <div className='time line-clamp-1'><FontAwesomeIcon icon={faClock} />&nbsp;&nbsp; 3 Min. To Read</div>
                </div>
           
              </div>
            </div>
            ))
          }
                  {/* Render pagination buttons */}
      <div className='mt-20 flex justify-center gap-2'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => goToPage(index + 1)} className={`border border-gray-200 rounded-full p-2 ${currentPage === index + 1 ? 'bg-emerald-600 text-white' : ''}`}>
           
          </button>
        ))}
      </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
