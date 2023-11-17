import React from 'react'

const Intro = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center h-screen bg-lime-100 dark:bg-slate-500 duration-500'>

      <div className='w-full md:w-10/12 m-4 md:m-6 md:mx-auto flex flex-col justify-center items-baseline flex-wrap text-center'>
        <p className='w-full dark:text-slate-200'>hey there, checkout my</p>
        <h1 className='w-full font-bold text-4xl mb-4 text-slate-800 dark:text-slate-900'>personal website</h1>
      </div>

      <div className='w-full md:w-10/12 m-4 md:m-6 md:mx-auto p-4 md:p-6 shadow shadow-neutral-500 shadow-lg border border-[#2F4B26] rounded-md bg-lime-200 dark:bg-gray-800'>
        <h2 className='font-bold text-4xl mb-4 text-slate-800 dark:text-slate-300'>what's new</h2>
        <ul className='list-disc px-10'>
          <li className='hover:cursor-default'>dark mode configed</li>
        </ul>
      </div>
    </div>
  )
}

export default Intro;