import React from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa';
import { GiBullseye } from "react-icons/gi";
import { GiCyberEye } from "react-icons/gi";
import aboutSide from '../assets/images/about-side.jpg'

const DigitalTransformationSection = () => {
  return (
    <div className="px-10 md:px-20 py-32">
        <div className="flex flex-col bg-red-800 lg:flex-row justify-center items-center bg-white ">
      {/* Left Section */}
      <div className="lg:w-1/2 px-4 h-[600px]  lg:px-16 space-y-6 py-10 about-bg-div">
        <p className="text-md md:text-lg uppercase font-bold text-primary">Who We Are</p>
        <h1 className="text-4xl font-bold text-black">
          We Help Transform Your Digital Brands
        </h1>
        <p className="text-gray-500">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse ruam nihil 
          molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
        </p>

        {/* Mission and Vision Boxes */}
            <div className="flex md:block  ">


        <div className="grid grid-cols-1 w-[50%] md:w-[100%]  bg-yellow-400 lg:grid-cols-2 gap-4">
          <div className="border p-6 rounded-lg shadow-md flex flex-col items-start space-y-4  border-green-200">
            <GiBullseye size={45} className="text-primary" />
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p className="text-gray-500">
              Recusandae itaque enim rerum hic tenetur a aut reiciendis volue no autem esse...
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-md flex flex-col items-start space-y-4 border-green-200">
            <GiCyberEye size={40} className="text-primary" />
            <h2 className="text-xl font-semibold">Our Vision</h2>
            <p className="text-gray-500">
              Oecusandae itaque enim rerum hic tenetur a aut reiciendis volue no autem esse...
            </p>
          </div>
        </div>
        <div className="w-[50%] flex md:hidden ">
        <img src={aboutSide} className='w-full  h-[582px] object-cover' alt="" />
        </div>
            </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-[40%] h-[600px]  flex justify-center items-center   bg-red-500  ">
        {/* <div className="relative">
          <img
            src="https://via.placeholder.com/500x300" // Replace with your actual image URL or import the image
            alt="Team Discussion"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 left-0 bg-white bg-opacity-70 p-4 rounded-lg w-full">
            <h3 className="text-lg font-bold text-black">
              Best Solutions For Every Aspect of Your Business
            </h3>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button className="bg-primary p-4 rounded-full">
              <svg
                className="w-8 h-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-6.186-4.564A1 1 0 007 7.24v9.52a1 1 0 001.566.832l6.186-4.564a1 1 0 000-1.664z"
                />
              </svg>
            </button>
          </div>
        </div> */}
        <img src={aboutSide} className='w-full h-full object-cover' alt="" />
      </div>
    </div>
    </div>
  );
};

export default DigitalTransformationSection;
