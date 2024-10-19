

import React from 'react';
import cloud from '../assets/images/blog-cloud.jpg';
import ITSecurity from '../assets/images/ITSecurity.avif'
import { LuCalendarCheck } from "react-icons/lu";
import TechConsultation from '../assets/images/TechnologyConsultation.avif'
import DigitalPotential from '../assets/images/Digital-Potential.jpg'


const BlogComponent = () => {
  return (
    <div className=''>
      <div className=" px-6 sm:px-20 py-10  lg:flex justify-between lg:space-y-0 space-y-14 ">
        {/* cloud  */}
        <div className=" w-full lg:w-[500px]  ">
        <div className="relative w-full h-[300px]">
          <img src={cloud} alt="Cloud Image" className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="absolute inset-0 flex mt-12 gap-4 ms-6 sm:ms-10">
            <div className="bg-primary w-4 h-16 sm:h-20"></div>

            <p className="text-white text-lg md:text-4xl  font-bold drop-shadow-md">Is Cloud the Right Choice?</p>
          </div>
        </div>
        <p className='gap-2 flex items-center text-gray-500 text-sm my-4'><LuCalendarCheck size={20}/>November 26, 2023</p>
        <h1 className='text-xl font-semibold text-primary'>Navigating the Skies: Is Cloud the Right Choice for Your Business?</h1>
        <p className='mt-4'>In the ever-evolving landscape of technology, the question of whether to migrate to the cloud is no longer a matter of if but when. The cloud, with its promises of scalability, flexibility, and cost-effectiveness, has become a pivotal player in shaping the digital transformation journey of businesses. <a href="" className='text-primary'>...more</a> </p>
        </div>
        {/* information security  */}
        <div className=" w-full lg:w-[500px] ">
        <div className="relative w-full h-[300px]">
          <img src={ITSecurity} alt="Cloud Image" className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="absolute inset-0 flex mt-12 gap-4 ms-10">
            <div className="bg-primary w-4 h-14"></div>

            <p className="text-white text-lg md:text-4xl  font-bold drop-shadow-md">Information Security</p>
          </div>
        </div>
        <p className='gap-2 flex items-center text-gray-500 text-sm my-4'><LuCalendarCheck size={20}/> September 26, 2023</p>
        <h1 className='text-xl font-semibold text-primary'>Fortifying Your Digital Citadel</h1>
        <p className='mt-4'>In the interconnected world of technology, where data reigns supreme, the importance of information security cannot be overstated. As businesses navigate the complex landscape of cyber threats, CybeRefresh emerges as a formidable ally, committed to safeguarding your digital assets and empowering your journey through the digital realm.  <a href="" className='text-primary'>...more</a> </p>
        </div>
      </div>


      <div className="px-6 sm:px-20 pb-10  lg:flex justify-between lg:space-y-0 space-y-14">
        {/* Technology Consultation  */}
        <div className=" w-full lg:w-[500px] ">
        <div className="relative w-full h-[300px]">
          <img src={TechConsultation} alt="Cloud Image" className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="absolute inset-0 flex mt-12 gap-4 ms-10">
            <div className="bg-primary w-5 h-20"></div>
            <p className="text-white text-lg md:text-4xl  font-bold drop-shadow-md">The Dynamics of Digital Transformation</p>
          </div>
        </div>
        <p className='gap-2 flex items-center text-gray-500 text-sm my-4'><LuCalendarCheck size={20}/>December 22, 2022</p>
        <h1 className='text-xl font-semibold text-primary'>Fostering Growth Through Technology Consultation</h1>
        <p className='mt-4'>In the ever-evolving landscape of technology, businesses are faced with both unprecedented opportunities and complex challenges. To navigate this digital terrain successfully and chart a course for sustainable growth, savvy enterprises turn to technology consultation. In this blog post, we explore how CybeRefresh, as a trusted technology consultant, becomes  <a href="" className='text-primary'>...more</a> </p>
        </div>
        {/* information security  */}
        <div className=" w-full lg:w-[500px] ">
        <div className="relative w-full h-[300px]">
          <img src={DigitalPotential} alt="Cloud Image" className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="absolute inset-0 flex mt-12 gap-4 ms-10">
            <div className="bg-primary w-4 h-20"></div>

            <p className="text-white text-lg md:text-4xl  font-bold drop-shadow-md">The Evolution of Digital Presence</p>
          </div>
        </div>
        <p className='gap-2 flex items-center text-gray-500 text-sm my-4'><LuCalendarCheck size={20}/> December 22, 2021</p>
        <h1 className='text-xl font-semibold text-primary'>Unleashing Digital Potential</h1>
        <p className='mt-4'>In the fast-paced digital landscape, where user experience is paramount, the significance of robust web and app development cannot be overstated. Enter CybeRefresh—a dynamic force committed to not just creating websites and applications but crafting digital experiences that resonate and captivate. In this blog post, we delve into how CybeRefresh redefines  <a href="" className='text-primary'>...more</a> </p>
        </div>
      </div>



    </div>
  );
};

export default BlogComponent;
