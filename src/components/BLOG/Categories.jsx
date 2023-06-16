import React from 'react'
import { categories } from '../../data/categories';

const Categories = () => {
  return (
    <div className='mt-14'>
    <h2 className='font-medium'>
      <span className='bg-emerald-600 text-white uppercase text-lg p-2'>
        Categories
      </span>{' '}
    </h2>
    <div className='mt-10'>
      {
        categories.map(({id, category, num})=> (
          <div key={id} className='flex justify-between py-3 border-b border-dotted border-gray-300 cursor-pointer hover:text-white hover:bg-emerald-600 px-3'>
        <div className='cat'>{category}</div>
        <div className='num'>{num}</div>
      </div>
        ))
        }
    </div>
  </div>
  )
}

export default Categories
