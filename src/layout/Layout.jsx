import React, { Children } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({Children}) => {
  return (
    <div className="flex flex-col min-h-screen  items-center bg-[#eaeaea]">
    <div className='max-w-screen-xl w-full bg-white shadow-xl'>
   <div className="divider bg-primary h-1     sm:w-full m-0  "></div>
       <Navbar/>
       {Children}
       <Footer/>
   </div>
   </div>
  )
}

export default Layout