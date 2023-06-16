import React from 'react'

const Ad = () => {
  return (
    <div className='ad bg-emerald-600 text-white px-5 py-[55px] space-y-[10px] mt-14 relative rounded-sm'>
    <p className='absolute top-1 right-2'>Ad</p>
    <h2 className='font-semibold text-[19px]'>
      Want To Travel Sikkim By Car?
    </h2>
    <p className='pb-[20px]'>
      Did you come here for something in particular or just general
      Riker-bashing? And blowing into
    </p>
    <button className='text-emerald-600 bg-white rounded-lg py-2 px-6 hover:scale-105 transition-all'>
      Visit Us
    </button>
  </div>
  )
}

export default Ad
