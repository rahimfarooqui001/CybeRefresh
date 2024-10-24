
// import React from 'react';
// import education from '../assets/images/education.jpg';
// import Hospitality from '../assets/images/Hospitality.jpg';
// import manufacturing from '../assets/images/manufacturing.jpg';
// import healthcare from '../assets/images/healthcare.jpg';

// const IndustrySpecialization = () => {
//   return (
//     <div className="text-center mt-14 space-y-12 px-4 lg:px-20">
//       <h1 className="text-2xl md:text-3xl font-semibold">Industry Specialization</h1>
//       <p className="text-gray-400 text-base md:text-lg">
//         We specialize in crafting tailored IT solutions, uniquely attuned to the distinctive needs of diverse industries, 
//         ensuring strategic alignment and transformative success.
//       </p>

//       <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6'>
        
//         {/* Education Technology */}
//         <div className='relative w-full h-[200px]  img-hover-zoom  overflow-hidden rounded-xl   hover:font-bold transition-all ease-in-out '>
//           <img src={education} alt="Education Technology" className='h-full w-full object-cover aspect-auto rounded-xl' />
//           <div className='absolute bottom-0 w-full bg-black bg-opacity-60 text-center py-4 rounded-b-xl'>
//             <h3 className='text-white text-sm md:text-lg'>Education Technology</h3>
//           </div>
//         </div>

//         {/* Hospitality Industry */}
//         <div className='relative w-full h-[200px]  img-hover-zoom  overflow-hidden rounded-xl   hover:font-bold transition-all ease-in-out'>
//           <img src={Hospitality} alt="Hospitality Industry" className='h-full w-full object-cover aspect-auto rounded-xl' />
//           <div className='absolute bottom-0 w-full bg-black bg-opacity-60 text-center py-4 rounded-b-xl'>
//             <h3 className='text-white text-sm md:text-lg'>Hospitality Industry</h3>
//           </div>
//         </div>

//         {/* Manufacturing Industry */}
//         <div className='relative w-full h-[200px]  img-hover-zoom  overflow-hidden rounded-xl   hover:font-bold transition-all ease-in-out'>
//           <img src={manufacturing} alt="Manufacturing Industry" className='h-full w-full object-cover aspect-auto rounded-xl' />
//           <div className='absolute bottom-0 w-full bg-black bg-opacity-60 text-center py-4 rounded-b-xl'>
//             <h3 className='text-white text-sm md:text-lg'>Manufacturing Industry</h3>
//           </div>
//         </div>

//         {/* Healthcare Solutions */}
//         <div className='relative w-full h-[200px]  img-hover-zoom  overflow-hidden rounded-xl   hover:font-bold transition-all ease-in-out '>
//           <img src={healthcare} alt="Healthcare Solutions" className=' h-full w-full  object-cover aspect-auto rounded-xl' />
//           <div className='absolute bottom-0 w-full bg-black bg-opacity-60 text-center py-4 rounded-b-xl'>
//             <h3 className='text-white text-sm md:text-lg '>Healthcare Solutions</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndustrySpecialization;



import React from 'react';
import education from '../assets/images/education.jpg';
import Hospitality from '../assets/images/Hospitality.jpg';
import manufacturing from '../assets/images/manufacturing.jpg';
import healthcare from '../assets/images/healthcare.jpg';
import { Link } from 'react-router-dom';

const IndustrySpecialization = () => {
  return (
    <div className="text-center pb-10 mt-14 space-y-12 px-4 lg:px-20">
      <h1 className="text-2xl md:text-3xl font-semibold text-black">Industry Specialization</h1>
      <p className="text-gray-400 text-base md:text-lg">
        We specialize in crafting tailored IT solutions, uniquely attuned to the distinctive needs of diverse industries, 
        ensuring strategic alignment and transformative success.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6'>
        
        {/* Education Technology */}
        <Link to={'/education-tech'} className='relative w-full h-[200px]  img-hover-zoom  overflow-hidden rounded-xl   hover:font-bold transition-all ease-in-out duration-500 '>
          <img src={education} alt="Education Technology" className='h-full w-full object-cover aspect-auto rounded-xl' />
          <div className='absolute bottom-0 w-full bg-black bg-opacity-60 text-center py-4 rounded-b-xl transition-all ease-in-out'>
            <h3 className='text-white text-sm md:text-lg'>Education Technology</h3>
          </div>
        </Link>

        {/* Hospitality Industry */}
        <Link to={'/hospitality'} className='relative w-full h-[200px]  img-hover-zoom  overflow-hidden rounded-xl   hover:font-bold transition-all ease-in-out duration-500'>
          <img src={Hospitality} alt="Hospitality Industry" className='h-full w-full object-cover aspect-auto rounded-xl' />
          <div className='absolute bottom-0 w-full bg-black bg-opacity-60 text-center py-4 rounded-b-xl transition-all ease-in-out'>
            <h3 className='text-white text-sm md:text-lg'>Hospitality Industry</h3>
          </div>
        </Link>

        {/* Manufacturing Industry */}
        <Link to={'/manufacturing'} className='relative w-full h-[200px]  img-hover-zoom  overflow-hidden rounded-xl   hover:font-bold transition-all ease-in-out duration-500'>
          <img src={manufacturing} alt="Manufacturing Industry" className='h-full w-full object-cover aspect-auto rounded-xl' />
          <div className='absolute bottom-0 w-full bg-black bg-opacity-60 text-center py-4 rounded-b-xl transition-all ease-in-out'>
            <h3 className='text-white text-sm md:text-lg'>Manufacturing Industry</h3>
          </div>
        </Link>

        {/* Healthcare Solutions */}
        <Link to={'/healthcare'} className='relative w-full h-[200px]  img-hover-zoom  overflow-hidden rounded-xl   hover:font-bold transition-all ease-in-out duration-500 '>
          <img src={healthcare} alt="Healthcare Solutions" className=' h-full w-full  object-cover aspect-auto rounded-xl' />
          <div className='absolute bottom-0 w-full bg-black bg-opacity-60 text-center py-4 rounded-b-xl transition-all ease-in-out'>
            <h1 className='text-white text-sm md:text-lg'>Healthcare Solutions</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default IndustrySpecialization;
