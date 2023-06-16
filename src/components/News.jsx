import React from 'react'

const News = () => {
  return (
    <section className='max-w-screen-xl px-5 mx-auto' id='news'>
    <div className='mt-[71px] mb-24 '>
    <h2 className='font-medium'>
            <span className='bg-emerald-600 text-white uppercase text-lg p-2'>
              News
            </span>
          </h2>
      <h2 className=' text-3xl font-semibold leading-[48px] max-w-2xl mb-[63px] mt-5'>
        Get latest updates on the Community
      </h2>
      <div className='grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 gap-5 font-gelion'>
        <div className='lg:row-span-2 lg:col-span-2 news rounded-lg h-[400px] sm:h-[500px] lg:h-[600px] relative font-dm-sans shadow-lg group hover:scale-105 transition-all cursor-pointer bg-no-repeat bg-center bg-cover'>
          <div className='absolute bottom-0 left-0 right-0 group-hover:h-80 h-full transition-all bg-gradient-to-t from-black to-transparent rounded-lg'></div>
          <div className='absolute bottom-5 flex flex-col space-y-5 p-5'>
            <div className='news-icon'>
              <img src="/assets/medium.svg" alt="medium icon" />
            </div>
            <div className='title font-medium text-[22px] leading-7 lg:leading-[39px] lg:font-bold text-white lg:text-[30px]  line-clamp-3'>
            Rising Stars: How These Few Nigerians in Tech are Putting Nigeria on the World Map
            </div>
            <div className='description text-white hidden lg:block line-clamp-3 font-dm-sans text-xl leading-[26.04px]'>
            In recent years, Nigeria has been making a name for itself in the global tech industry, with an increasing number of Nigerian tech professionals and entrepreneurs gaining recognition and making...
            </div>
          </div>
        </div>
        <div className='lg:col-span-2 news2 rounded-lg relative font-dm-sans shadow-lg group hover:scale-105 transition-all cursor-pointer'>
          <div className='absolute bottom-0 left-0 right-0 group-hover:h-40 bg-gradient-to-t from-black to-transparent rounded-lg h-full transition-all'></div>
          <div className='absolute bottom-5 lg:bottom-2 flex flex-col space-y-5 p-5'>
            <div className='news-icon'></div>
            <div className='title font-medium text-[22px] leading-7 lg:leading-[39px] lg:font-bold text-white lg:text-[30px]  line-clamp-3'>
              Njoku Emmanuel's Journey To Blockchain Stardom
            </div>
            <div className='description text-white hidden line-clamp-3 font-dm-sans text-xl leading-[26.04px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              iure provident voluptas distinctio. Praesentium explicabo enim,
              voluptates voluptatum aliquam pariatur. Laudantium a deserunt
              omnis incidunt, necessitatibus tenetur eveniet impedit nisi!
            </div>
          </div>
        </div>
        <div className='relative news rounded-lg shadow-lg group hover:scale-105 transition-all cursor-pointer'>
        <div className='absolute bottom-0 left-0 right-0 group-hover:h-40 bg-gradient-to-t from-black to-transparent rounded-lg h-full transition-all'></div>
          <div className='absolute bottom-5 lg:bottom-2 flex flex-col space-y-5 p-5'>
            <div className='news-icon'></div>
            <div className='title font-medium text-[22px] leading-7 lg:leading-[39px] lg:font-bold text-white lg:text-[30px]  line-clamp-3'>
              Njoku Emmanuel's Journey To Blockchain Stardom
            </div>
            <div className='description text-white hidden line-clamp-3 font-dm-sans text-xl leading-[26.04px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              iure provident voluptas distinctio. Praesentium explicabo enim,
              voluptates voluptatum aliquam pariatur. Laudantium a deserunt
              omnis incidunt, necessitatibus tenetur eveniet impedit nisi!
            </div>
          </div>
        </div>
        <div className='relative news2 rounded-lg shadow-lg group hover:scale-105 transition-all cursor-pointer'>
        <div className='absolute bottom-0 left-0 right-0 group-hover:h-40 bg-gradient-to-t from-black to-transparent rounded-lg h-full transition-all'></div>
          <div className='absolute bottom-5 lg:bottom-2 flex flex-col space-y-5 p-5'>
            <div className='news-icon'></div>
            <div className='title font-medium text-[22px] leading-7 lg:leading-[39px] lg:font-bold text-white lg:text-[30px]  line-clamp-3'>
              Njoku Emmanuel's Journey To Blockchain Stardom
            </div>
            <div className='description text-white hidden line-clamp-3 font-dm-sans text-xl leading-[26.04px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              iure provident voluptas distinctio. Praesentium explicabo enim,
              voluptates voluptatum aliquam pariatur. Laudantium a deserunt
              omnis incidunt, necessitatibus tenetur eveniet impedit nisi!
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default News
