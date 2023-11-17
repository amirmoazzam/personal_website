import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className='flex flex-row flex-wrap justify-center h-screen bg-lime-100 dark:bg-slate-500 duration-500'>

            <div className='w-full md:w-10/12 m-4 md:m-6 md:mx-auto flex flex-col justify-center items-baseline flex-wrap text-center'>
                <p className='w-full dark:text-slate-200'>please fill the form below for more contacts</p>
                <h1 className='w-full font-bold text-4xl mb-4 text-slate-800 dark:text-slate-900'>contacts</h1>
                <form action="#" method='POST' className='flex flex-col justify-center items-center w-full'>
                    <input type="text" name="fullname" id="fullname" placeholder='fullname' className='md:w-[40rem] w-[20rem] p-2 border-2 border-blue-900 bg-[#ccd6f6]' />
                    <input type="email" name="email" id="email" placeholder='email' className='md:w-[40rem] w-[20rem] my-4 p-2 border-2 border-blue-900 bg-[#ccd6f6]' />
                    <textarea name="message" id="message" rows="10" placeholder='write your message here...' className='md:w-[40rem] w-[20rem] p-2 border-2 border-blue-900 bg-[#ccd6f6]'></textarea>
                    <button type='submit' className='w-[10rem] px-4 py-3 mx-auto my-3 rounded-md border-2 hover:border-blue-900 hover:bg-blue-900 duration-500'>send</button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Contact;