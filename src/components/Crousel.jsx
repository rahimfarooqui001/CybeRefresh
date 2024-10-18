

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'; 
import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper/modules';
import B1 from '../assets/images/banner1.jpg';
import B2 from '../assets/images/banner2.jpg';
import B3 from '../assets/images/banner3.jpg';
import B4 from '../assets/images/banner4.jpg';

const Crousel = () => {
  return (
    <div className='   bg-white h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] max-w-screen-2xl banner-swiper container '>
      <Swiper
        speed={2500}  
        slidesPerView={1}
        effect="fade"  
        fadeEffect={{ crossFade: true }}  
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 4000, 
          disableOnInteraction: false, 
        }}
        modules={[Navigation, Autoplay, Pagination, EffectFade]}
        className="mySwiper h-full "
      >
        <SwiperSlide className='relative '>
          <img src={B1} alt="" className="w-full h-full " />
          <div className="absolute inset-0  p-5 bg-black bg-opacity-25 flex flex-col justify-end   gap-4">
            <div className="space-y-4 sm:mb-20">
              <h1 className='text-md sm:text-2xl bg-primary p-2 px-4  w-fit ms-8 font-bold text-white'>Your Success Our Priority</h1>
            <p className='text-md hidden sm:flex bg-black py-2 px-4 bg-opacity-50 w-[350px]  text-white ms-8'>
              Whether it's navigating complex challenges, implementing transformative technologies, or ensuring robust cybersecurity, we are here to elevate your business to new heights.
            </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={B2} alt="" className="w-full h-full " />
          <div className="absolute inset-0 flex flex-col items-end justify-end gap-4 text-center p-5 bg-black bg-opacity-25 ">
            <div className="space-y-4 sm:mb-20 flex flex-col justify-end items-end">
              <h1 className='text-md sm:text-2xl  font-bold text-white bg-primary p-2 px-4  w-fit mr-8 '>Revitalize Your Business</h1>
            <p className="text-md hidden sm:flex bg-black py-2 px-4 bg-opacity-50 w-[350px] mr-8 text-white">
                Partner with CybeRefresh for a journey that refreshes your technology landscape and revitalizes your business for sustained success.
            </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={B3} alt="" className="w-full h-full " />
          <div className="absolute inset-0  gap-4 flex flex-col justify-end  p-5  bg-black bg-opacity-25 ">
            <div className="space-y-4 sm:mb-20">
            <h1 className='bg-primary p-2 px-4  w-fit ms-8 text-md sm:text-2xl  font-bold text-white '>Enhancing User Experience</h1>
            <p className='text-md hidden sm:flex bg-black py-2 px-4 bg-opacity-50 w-[350px] text-white ms-8'>
              We specialize in crafting intuitive and user-friendly experiences that facilitate seamless technology adoption within your organization.
            </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={B4} alt="" className="w-full h-full " />
          <div className="absolute inset-0 flex flex-col items-end justify-end text-center p-5 gap-4 bg-black bg-opacity-25 ">
            <div className="space-y-4 sm:mb-20 flex flex-col justify-end items-end">
            <h1 className='bg-primary p-2 px-4  w-fit  text-md sm:text-2xl  font-bold text-white mr-8'>Data-driven Insights</h1>
            <p className='text-md hidden sm:flex  bg-black py-2 px-4 bg-opacity-50 w-[350px] mr-8 text-white'>
              From organizing and securing your data to implementing sophisticated analytics tools, we guide you through the entire data lifecycle.
            </p>

            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Crousel;





