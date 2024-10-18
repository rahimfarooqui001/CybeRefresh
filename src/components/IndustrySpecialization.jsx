
import React from 'react';
import education from '../assets/images/education.jpg';
import Hospitality from '../assets/images/Hospitality.jpg';
import manufacturing from '../assets/images/manufacturing.jpg';
import healthcare from '../assets/images/healthcare.jpg';

const IndustrySpecialization = () => {
  return (
    <div className="text-center mt-14 space-y-12 px-4 lg:px-20">
      <h1 className="text-2xl md:text-3xl font-semibold">Industry Specialization</h1>
      <p className="text-gray-400 text-base md:text-lg">
        We specialize in crafting tailored IT solutions, uniquely attuned to the distinctive needs of diverse industries, 
        ensuring strategic alignment and transformative success.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6'>
        
        {/* Education Technology */}
        <div className='relative w-full h-[200px] '>
          <img src={education} alt="Education Technology" className='h-full w-full object-cover rounded-xl' />
          <div className='absolute bottom-0 w-full bg-black bg-opacity-60 text-center py-4 rounded-b-xl'>
            <h3 className='text-white text-sm md:text-xl'>Education Technology</h3>
          </div>
        </div>

        {/* Hospitality Industry */}
        <div className='relative w-full h-[200px] '>
          <img src={Hospitality} alt="Hospitality Industry" className='h-full w-full object-cover rounded-xl' />
          <div className='absolute bottom-0 w-full bg-black bg-opacity-60 text-center py-4 rounded-b-xl'>
            <h3 className='text-white text-sm md:text-xl'>Hospitality Industry</h3>
          </div>
        </div>

        {/* Manufacturing Industry */}
        <div className='relative w-full h-[200px] '>
          <img src={manufacturing} alt="Manufacturing Industry" className='h-full w-full object-cover rounded-xl' />
          <div className='absolute bottom-0 w-full bg-black bg-opacity-60 text-center py-4 rounded-b-xl'>
            <h3 className='text-white text-sm md:text-xl'>Manufacturing Industry</h3>
          </div>
        </div>

        {/* Healthcare Solutions */}
        <div className='relative w-full h-[200px] '>
          <img src={healthcare} alt="Healthcare Solutions" className='h-full w-full object-cover rounded-xl' />
          <div className='absolute bottom-0 w-full bg-black bg-opacity-60 text-center py-4 rounded-b-xl'>
            <h3 className='text-white text-sm md:text-xl'>Healthcare Solutions</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySpecialization;


