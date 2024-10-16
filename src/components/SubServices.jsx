
import React from 'react';
import Dt from '../assets/images/Dt.jpg';
import ss from '../assets/images/SS.jpg';
import Ti from '../assets/images/TI.png';

const SubServices = () => {
  return (
    <div className='flex justify-between px-20'>
      {/* Service 1 */}
      <div className=' w-[400px] space-y-4 '>
        <a href="" className='relative'>
        <img src={Dt} alt="" className=' w-[400px] h-[230px]  object-cover rounded-xl' />
            <div className='absolute w-full h-[230] bg-white top-0 bottom-0 opacity-0 hover:opacity-30 '>

            </div>
        </a>
        <div className=' inset-0    flex rounded-xl   items-center transition-opacity duration-300 '>
          <div className='flex flex-col gap-6'>
          <h3 className='hover:text-primary text-2xl  text-center cursor-pointer '>Digital Transformation</h3>
          <p  className=' px-6 text-center text-gray-400'>Embark on a transformative journey with CybeRefresh, we propel businesses into the future through strategic Digital Transformation.</p>
          </div>
        </div>
      </div>

      {/* Service 2 */}
      <div className=' w-[400px] space-y-4 '>
      <a href="" className='relative'>
        <img src={Ti} alt="" className=' w-[400px] h-[230px]  object-cover rounded-xl' />
            <div className='absolute w-full h-[230] bg-white top-0 bottom-0 opacity-0 hover:opacity-30 '>

            </div>
        </a>
        <div className=' inset-0    flex rounded-xl   items-center transition-opacity duration-300 '>
          <div className='flex flex-col gap-6'>
          <h3 className='hover:text-primary text-2xl  text-center cursor-pointer '>Technology Integration</h3>
          <p  className=' px-6 text-center text-gray-400'>At CybeRefresh, we believe that technology integration is not just about adopting new tools; it’s about unlocking the full potential of your business.</p>
          </div>
        </div>
      </div>

      {/* Service 3 */}
      <div className=' w-[400px] space-y-4 '>
      <a href="" className='relative'>
        <img src={ss} alt="" className=' w-[400px] h-[230px]  object-cover rounded-xl' />
            <div className='absolute w-full h-[230] bg-white top-0 bottom-0 opacity-0 hover:opacity-30 '>

            </div>
        </a>
        <div className=' inset-0    flex rounded-xl   items-center transition-opacity duration-300 '>
          <div className='flex flex-col gap-6'>
          <h3 className='hover:text-primary text-2xl  text-center cursor-pointer '>Support Services</h3>
          <p  className=' px-6 text-center text-gray-400'>Experience unparalleled support services with CybeRefresh—your dedicated partner in operational excellence.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubServices;







