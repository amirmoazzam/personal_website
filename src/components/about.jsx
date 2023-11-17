import React from 'react';
import bg from '../assets/bg-1.jpg'

const About = () => {
  return (
    <div className='flex flex-row justify-center items-center h-screen bg-div bg-blend-multiply bg-green-600 dark:bg-slate-700 duration-500' style={{backgroundImage:`url(${bg})`}}>
        <div className='md:mx-auto p-4 md:p-6 text-white'>
          <div className='h-3/6 md:mx-auto md:w-10/12 p-4 md:p-6 flex flex-col md:flex-row justify-center items-baseline'>
            <div className='md:mr-4 md:mt-0 mb-4'>
                <h2 className='mb-2 text-4xl font-bold md:text-right'>about me</h2>
                <p className='md:text-right dark:text-slate-200'>here is a platform for sharing my projects with you</p>
            </div>
            <div className='md:ml-4 md:my-0'>
                <p className='dark:text-slate-200'>i work on react project styled based on tailwindcss technology, sometimes i'll works on python, c, cpp, typescript and vanila js.</p>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default About;