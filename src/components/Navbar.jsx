

import React, { useEffect, useState } from 'react';
import logo2 from '../assets/images/logo.png';
import { IoIosSearch } from "react-icons/io";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
      className={`text-black bg-[#f8f8f8] px-4  xl:px-20 ${sticky ? 'sticky-navbar sticky z-50' : ''}`}
      style={{ position: 'sticky', top: 0, zIndex: 1000 }}
    >
      <div className={`navbar  p-1  flex justify-around  sm:justify-between  `}>
       {/* Drawer for mobile or tablet view  */}
                  <div className="  lg:hidden">
                      <div className="drawer   w-fit">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle " />
                    <div className="drawer-content ">
                      <label htmlFor="my-drawer" className='cursor-pointer '><IoMenu size={40}/></label>
                    </div>
                    <div className="drawer-side z-50">
                      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                      <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <div className="flex justify-end mb-2">
                      <IoClose size={30} className='cursor-pointer'/>
                        </div>
                        <div className=" gap-2 w-full sm:hidden flex justify-between my-2">
                    <input
                      type="text"
                      placeholder="Search"
                      className={`text-black input h-8 input-bordered w-full md:w-auto focus:outline-[#77CC6D] transition-all duration-300 ease-in-out`}
                    />
                    <IoIosSearch
                      size={25}
                      className="hover:text-primary cursor-pointer"
                      
                    />
                  </div>
                        <ul className="menu bg-base-200 rounded-box w-56 ">
                        <li><a className="hover:bg-primary hover:text-white">Home</a></li>
                        <li><a className="hover:bg-primary hover:text-white">About Us</a></li>
                        <li><a className="hover:bg-primary hover:text-white">Blog</a></li>
                        <li>
                          <details >
                            <summary className="hover:bg-primary hover:text-white"><a >Services</a></summary>
                            <ul>
                            <li><a className="hover:bg-primary hover:text-white">IT Consulting Services</a></li>
                            <li><a className="hover:bg-primary hover:text-white">Support Services</a></li>
                            <li><a className="hover:bg-primary hover:text-white">Technology Integration</a></li>
                            <li><a className="hover:bg-primary hover:text-white">Digital Transformation</a></li>


                              
                            </ul>
                          </details>
                        </li>
                        <li><a className="hover:bg-primary hover:text-white">Contact Us</a></li>
                      </ul>
                      </div>
                    </div>
                  </div>



                 </div>

{/* logo  */}
            <div className="w-52 h-20 flex items-center ">
                        <a className="cursor-pointer h-full w-full">
                          <img src={logo2} alt="Logo" />
                        </a>
                      </div>





          
        
{/* Routes  */}
<div className=" hidden lg:flex">
      <ul className="menu lg:menu-horizontal  rounded-box gap-2 ">
        <li><a className='hover:bg-primary hover:text-white  '>Home</a></li>
        <li><a className='hover:bg-primary hover:text-white'>About Us</a></li>
        <li><a className='hover:bg-primary hover:text-white'>Blog</a></li>

        <li>
          <details  >
            <summary className='hover:bg-primary hover:text-white'>Services</summary>
            <ul className='text-black w-52'>
            <li><a className="hover:bg-primary hover:text-white hover:text-white">IT Consulting Services</a></li>
                  <li><a className="hover:bg-primary hover:text-white hover:text-white">Support Services</a></li>
                  <li><a className="hover:bg-primary hover:text-white hover:text-white">Technology Integration</a></li>
                  <li><a className="hover:bg-primary hover:text-white hover:text-white">Digital Transformation</a></li>
              
            </ul>
          </details>
        </li>
        <li><a className='hover:bg-primary hover:text-white'>Contact</a></li>
      </ul>
</div>


{/* search  */}
        <div className=" gap-2 hidden sm:flex">
          <input
            type="text"
            placeholder="Search"
            className={`text-black input h-8 input-bordered w-24 md:w-auto focus:outline-[#77CC6D] transition-all duration-300 ease-in-out`}
          />
          <IoIosSearch
            size={25}
            className="hover:text-primary cursor-pointer"
            
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;



