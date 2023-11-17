import React, {useEffect, useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {MdDarkMode, MdOutlineDarkMode} from 'react-icons/md';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import logo from '../assets/logo.png';
import {Link} from 'react-scroll';

export const Navbar = () => {
    const [theme, settheme] = useState(localStorage.getItem("theme"));
    // useEffect(() => {
    //   if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    //     settheme('dark')
    //   } else { settheme('light') }
    // }, [])
    
    useEffect(() => {
      if (theme === 'dark'){
        document.documentElement.classList.add('dark')
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem("theme", "light");
      }
    }, [theme])
    const handletheme = () => settheme(theme === 'dark' ? "light" : "dark");
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2F4B26] text-white dark:bg-gray-900'>
        <div className='flex justify-start items-center w-80'>
            {/* logo */}
            <div>
                <img src={logo} alt="logo image" style={{width: '60px'}}/>
            </div>
            
            {/* desktop menu */}
            <ul className="hidden md:flex">
                <li>
                    <Link to='banner' smooth={true} duration={500}>home</Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>about</Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>contact</Link>
                </li>
            </ul>
        </div>

        <div className='flex justify-between items-center w-20'>
            {/* dark mode switcher */}
            <div onClick={handletheme} className="z-10">
                {theme === "light" ? <MdDarkMode onClick={handletheme} size={25}/> : <MdOutlineDarkMode onClick={handletheme} size={25}/>}
            </div>

            {/* hanburger */}
            <div onClick={handleNav} className='md:hidden z-10'>
                {!nav ? <FaBars size={30}/> : <FaTimes size={30}/>}
            </div>
        </div>
        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#2F4B26] flex flex-col justify-center items-center dark:bg-gray-900"}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleNav} to='banner' smooth={true} duration={500}>home</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleNav} to='about' smooth={true} duration={500}>about</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleNav} to='contact' smooth={true} duration={500}>contact</Link>
            </li>
        </ul>

        {/* social icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-100 pl-2'>
                    LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-100 pl-2'>
                    Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-800'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-100 pl-2'>
                    Mail <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-800'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-100 pl-2'>
                    Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}