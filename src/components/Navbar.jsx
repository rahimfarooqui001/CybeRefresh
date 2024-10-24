

import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import { IoIosSearch } from "react-icons/io";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { IoMdArrowDropdown } from "react-icons/io";


const Navbar = () => {


  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY); // Log scroll position for debugging
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`text-black bg-secondary p-0 sm:px-4 xl:px-20 ${
        sticky ? 'sticky-navbar shadow-md duration-300 transition-all ease-in-out' : ''
      }`}
    >
      <div className="navbar  flex justify-between">
        {/* Drawer for mobile or tablet view */}
        <div className="lg:hidden gap-1">
          <div className="drawer w-fit">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className='cursor-pointer'><IoMenu size={40} /></label>
            </div>
            <div className="drawer-side z-50">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <div className="menu bg-secondary text-base-content min-h-full w-fit sm:w-80 p-4">
                <div className="flex justify-end mb-2">
                  <IoClose size={30} className='cursor-pointer' onClick={() => {
                    document.getElementById('my-drawer').checked = false;
                  }} />
                </div>
                <div className="gap-2 w-full sm:hidden flex justify-between my-2">
                  <input
                    type="text"
                    placeholder="Search"
                    className={`text-black input h-8 input-bordered w-full md:w-auto focus:outline-[#77CC6D] transition-all duration-300 ease-in-out`}
                  />
                  <IoIosSearch size={25} className="hover:text-primary cursor-pointer" />
                </div>
                <ul className="menu  bg-secondary rounded-box w-full sm:w-56">
                  <li><Link to='/' className="hover:!bg-primary hover:!text-white ">Home</Link></li>
                  <li><Link to='/About-Us' className="hover:!bg-primary hover:!text-white ">About Us</Link></li>
                  <li><Link to='/Blog' className="hover:!bg-primary hover:!text-white ">Blog</Link></li>
                  <li>
                    <details>
                      <summary className="hover:!bg-primary hover:!text-white ">Services</summary>
                      <ul>
                        <li><Link to='/consulting' className="hover:!bg-primary hover:!text-white ">IT Consulting Services</Link></li>
                        <li><Link to='/it-support' className="hover:!bg-primary hover:!text-white ">Support Services</Link></li>
                        <li><Link to='/tech-integration' className="hover:!bg-primary hover:!text-white ">Technology Integration</Link></li>
                        <li><Link to='/digital-transformation' className="hover:!bg-primary hover:!text-white ">Digital Transformation</Link></li>
                      </ul>
                    </details>
                  </li>
                  <li><Link to='/Contact' className="hover:!bg-primary hover:!text-white ">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>



          <div className="w-32 h-12 sm:w-52 sm:hidden sm:h-20 flex bg-none items-center justify-center">
          <div className=" h-full w-full">
            <Link to='/'>
            <img src={logo} alt="Logo" className='cursor-pointer ' />
            </Link>
          </div>
        </div>
        </div>

        {/* Logo */}
        <div className="w-32 h-12 sm:w-52 sm:h-20 hidden sm:flex bg-none items-center justify-center">
          <div className=" h-full w-full">
            <Link to='/'>
            <img src={logo} alt="Logo" className='cursor-pointer' />
            </Link>
          </div>
        </div>

        {/* Routes */}
        <div className="hidden  lg:flex">
          <ul className="menu lg:menu-horizontal rounded-box gap-2 ">
            <li><Link  to='/' className='hover:!bg-primary  hover:!text-white  '>Home</Link></li>
            <li><Link to='/About-Us' className='hover:!bg-primary hover:!text-white  '>About Us</Link></li>
            <li><Link to='/Blog' className='hover:!bg-primary hover:!text-white  '>Blog</Link></li>

<div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="py-2 px-4 rounded-lg hover:!bg-primary hover:!text-white flex gap-1 items-center " onClick={(e) => {
    e.preventDefault();
    e.stopPropagation(); 
    document.getElementById('dropdown-content').style.display = document.getElementById('dropdown-content').style.display === 'none'? 'block' : 'none';
  }}  onMouseDown={(e) => e.stopPropagation()}  >Services <IoMdArrowDropdown className='mt-1' size={16}/> </div>
  <ul tabIndex={0} id='dropdown-content' className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
  <li><Link to='/consulting' className="hover:!bg-primary hover:!text-white  ">IT Consulting Services</Link></li>
                  <li><Link to='/it-support' className="hover:!bg-primary hover:!text-white  ">Support Services</Link></li>
                  <li><Link to='/tech-integration' className="hover:!bg-primary hover:!text-white  ">Technology Integration</Link></li>
                  <li><Link to='/digital-transformation' className="hover:!bg-primary hover:!text-white  ">Digital Transformation</Link></li>
  </ul>
</div>
            <li><Link to='/Contact' className='hover:!bg-primary hover:!text-white '>Contact</Link></li>
          </ul>
        </div>

        {/* Search */}
        <div className="gap-2 hidden  sm:flex">
          <input
            type="text"
            placeholder="Search"
            className={`text-black input h-8 input-bordered w-24 md:w-auto focus:outline-[#77CC6D] transition-all duration-300 ease-in-out`}
          />
          <IoIosSearch size={25} className="hover:text-primary cursor-pointer" />
        </div>
        <LanguageSelector/>
      </div>
    </div>
  );
};

export default Navbar;

