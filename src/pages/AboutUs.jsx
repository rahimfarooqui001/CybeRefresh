import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import AboutUsComponent from '../components/AboutUsComponent';


const AboutUs = () => {
  return (
    <div className="flex justify-center bg-[#eaeaea]">
     <div className='max-w-screen-xl w-full bg-white'>
    <div className="divider bg-primary h-1     sm:w-full m-0  "></div>
        <Navbar/>
        <AboutUsComponent/>
        <Footer/>
    </div>
    </div>
  )
}

export default AboutUs