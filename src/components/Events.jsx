import React from 'react'

const Events = () => {
  return (
 <section id='events'>
  <div className="bg-[#f2f8f7] text-[#1E1E1E] py-8">
    <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
      <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
      <h2 className='font-medium'>
            <span className='bg-emerald-600 text-white uppercase text-lg p-2'>
              Upcoming
            </span>{' '}
            Events
          </h2>
        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Events Timeline</p>
        <p className="text-sm md:text-base text-gray-450 mb-4">
          Here’s your guide to our events slated to take place across the year.
        </p>
  
      </div>
      <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 border-yellow-555 absolute h-full border" style={{right: '50%', border: '2px solid #059669', borderRadius: '1%'}} />
            <div className="border-2-2 border-yellow-555 absolute h-full border" style={{left: '50%', border: '2px solid #059669', borderRadius: '1%'}} />
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12" />
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-emerald-600">1-6 October, 2023</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Save the Date: Annual Charity Gala</h4>
                <p className="text-sm md:text-base leading-snug text-gray-450 text-opacity-100">
                Join us for an unforgettable evening of elegance and philanthropy at our Annual Charity Gala. All proceeds will go towards supporting underprivileged children in our community. Mark your calendars and get ready for a night to remember!
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12" />
              <div className="order-1  w-5/12 px-1 py-4 text-left">
                <p className="mb-3 text-base text-emerald-600">6-9 November, 2023</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Tech Conference 2023</h4>
                <p className="text-sm md:text-base leading-snug text-gray-450 text-opacity-100">
                Calling all tech enthusiasts! Our highly anticipated Tech Conference is just around the corner. Join industry leaders, innovators, and experts as they share their insights on the latest trends and advancements in technology. Don't miss out on this incredible opportunity to expand your knowledge and network with like-minded professionals.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12" />
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-emerald-600"> 10 November, 2023</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Family Fun Day at the Park</h4>
                <p className="text-sm md:text-base leading-snug text-gray-450 text-opacity-100">
                Gather your loved ones and join us for a day filled with laughter, games, and entertainment at our Family Fun Day at the Park. From exciting activities for kids to delicious food stalls, there's something for everyone. It's the perfect opportunity to create lasting memories with your family and connect with others in the community.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12" />
              <div className="order-1  w-5/12 px-1 py-4">
                <p className="mb-3 text-base text-emerald-600">18 November, 2023</p>
                <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Workshop: Mastering Digital Marketing</h4>
                <p className="text-sm md:text-base leading-snug text-gray-450 text-opacity-100">
                Are you looking to enhance your digital marketing skills? Join us for an interactive workshop led by industry experts. Learn the latest strategies, techniques, and tools to take your online presence to new heights. Whether you're a business owner or marketing professional, this workshop is a must-attend for anyone seeking to stay ahead in the digital landscape.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Events
