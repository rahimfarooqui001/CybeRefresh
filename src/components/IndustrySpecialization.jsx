
import React from 'react';
import education from '../assets/images/education.jpg';
import Hospitality from '../assets/images/Hospitality.jpg';
import manufacturing from '../assets/images/manufacturing.jpg';
import healthcare from '../assets/images/healthcare.jpg'

const IndustrySpecialization = () => {
  return (
  <div className="text-center space-y-12">
    <h1 className="text-3xl font-semibold">Industry Specialization</h1>
    <p className="text-gray-400 text-lg">
      We specialize in crafting tailored IT solutions, uniquely attuned to the distinctive needs of diverse industries, 
      ensuring strategic alignment and transformative success.
    </p>
    
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4  px-20'>

      {/* Education Technology */}
      <div className='relative w-[300px] h-[200px] '>
        <img src={education} alt="" className='h-full w-full object-cover rounded-xl' />
        <div className='absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 flex rounded-xl   items-center transition-opacity justify-center duration-300 '>
          <h3 className='text-white text-3xl  '>Education Technology</h3>
        
        </div>
      </div>

      {/* Hospitality Industry */}

      <div className='relative w-[300px] h-[200px] '>
        <img src={Hospitality} alt="" className='h-full w-full object-cover rounded-xl' />
        <div className='absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 flex rounded-xl   items-center transition-opacity justify-center duration-300 '>
          <h3 className='text-white text-3xl  '>Hospitality Industry</h3>
        
        </div>
      </div>

      {/* Manufacturing Industry */}
      
      <div className='relative w-[300px] h-[200px] '>
        <img src={manufacturing} alt="" className='h-full w-full object-cover rounded-xl' />
        <div className='absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 flex rounded-xl   items-center transition-opacity justify-center duration-300 '>
          <h3 className='text-white text-3xl  '>Manufacturing Industry</h3>
        
        </div>
      </div>

      {/* Healthcare Solutions */}

       <div className='relative w-[300px] h-[200px] '>
        <img src={healthcare} alt="" className='h-full w-full object-cover rounded-xl' />
        <div className='absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 flex rounded-xl   items-center transition-opacity justify-center duration-300 '>
          <h3 className='text-white text-3xl  '>Healthcare Solutions</h3>
        
        </div>
      </div>


    </div>
  </div>
  );
};

export default IndustrySpecialization;







