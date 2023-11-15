import React from 'react'

const Intro = () => {
  return (
    <div className='flex flex-col h-screen'>

      <div className='md:mx-auto md:w-8/12 m-4 md:m-6'>
        <p className='dark:text-slate-200'>hey there, checkout my</p>
        <h1 className='font-bold text-4xl mb-4 capitalize text-slate-800 dark:text-slate-900'>personal website</h1>
      </div>

      <div className='md:mx-auto md:w-8/12 p-4 m-4 md:p-6 md:m-6 shadow shadow-neutral-500 shadow-lg border border-[#2F4B26] rounded-md bg-lime-200 dark:bg-gray-800'>
        <h2 className='font-bold text-4xl mb-4 capitalize text-slate-800 dark:text-slate-300'>what's new</h2>
        <ul className='list-disc px-10'>
          <li className='hover:cursor-default'>dark mode configed</li>
        </ul>
      </div>

      <div className='h-3/6 md:mx-auto md:w-8/12 p-4 md:p-6 flex flex-col md:flex-row justify-center items-baseline'>
        <div className='md:mr-4 md:my-0 mb-4'>
          <h2 className='mb-2 text-4xl font-bold md:text-right capitalize text-slate-800 dark:text-slate-900'>about</h2>
          <p className='md:text-right dark:text-slate-200'>a platform for sharing my projects steps with you</p>
        </div>
        <div className='md:ml-4 md:my-0'>
          <p className='capitalize dark:text-slate-200'>i work on react project styled based on tailwindcss technology, sometimes i'll works on python, c, cpp, typescript and vanila js.</p>
        </div>
      </div>
    </div>
  )
}

export default Intro;