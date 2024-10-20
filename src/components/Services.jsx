import React from 'react'
import ss from '../assets/images/pexels-shvetsa-4482900.jpg'
import bg from '../assets//images/about-bg.avif'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import consulting from '../assets/images/consulting.jpg'
import support from '../assets/images/support.avif'
import integration from '../assets/images/Integration.avif'
import digital from '../assets/images/Digital.avif'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <div className='  lg:px-20   '>
        <div className=" relative  sm:flex h-[550px]  sm:h-[280px] md:h-[450px]">
          {/* background images  */}
          <div className="w-[100%]  sm:w-[30%] h-[50%] sm:flex sm:h-full relative ">
            <img src={ss} alt="" className='w-full  h-full' />
          </div>
          {/* background images  */}
          <div className="w-[100%] sm:w-[70%] h-[50%] relative  sm:flex   sm:h-full md:h-[450px] ">
            <img src={bg} alt="" className='w-full h-full' />
          </div>
          <div className="absolute top-[5%] sm:top-0     w-full h-full block sm:flex  items-center px-2 md:px-10 gap-4 ">

            {/* services we offer  */}
              <div className="service-div  p-2 sm:px-8 text-center w-[70%] mx-auto  text-white rounded-xl h-[250px] md:h-72 flex  gap-1 flex-col justify-center  sm:w-fit bg-primary opacity-85  ">
                <h1 className='text-xl md:text-2xl xl:text-3xl  font-bold'>Services We <br /> Offer</h1>
                <button className='get-started-btn text-sm md:text-md font-semibold mt-10' >Let's Connect</button>
              </div>

              {/* Swiper /Crousel/Slider  */}
              <div className=" w-[100%] sm:w-[50%] md:w-[75%] rounded-xl h-[250px] md:h-72">
                

              <Swiper  
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        spaceBetween={10}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
            1280: {
                slidesPerView: 3,
            },
            1024: {
              slidesPerView: 2,
            },
          768: {
            slidesPerView: 2,
          },
          640:{
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
        }}
        scrollbar={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard,Autoplay ,Navigation]}
        className="mySwiper services-swiper  h-full w-full "
      >

       
       
                <SwiperSlide  >
                <div className=" p-2 md:p-4 text-center  rounded-xl h-full flex items-center flex-col justify-center  gap-1  w-fit bg-white  ">
                <img src={consulting} alt="" className='w-20 h-20 md:w-28 md:h-28' />
                <h1 className='text-xl  font-semibold hover:text-primary'>IT Consulting Services</h1>
                <p className='text-sm'>Strategic IT consulting from CyberRefresh for smarter, more efficient operations.</p>
                <Link to={'/consulting'} className='gap-1 text-sm text-primary flex items-center justify-center cursor-pointer' >read more <FaArrowRight className='mt-1' size={10}/></Link>
              </div>
                </SwiperSlide>

                <SwiperSlide  >
                <div className=" p-2 md:p-4 text-center  rounded-xl h-full flex items-center flex-col justify-center  gap-1 w-fit bg-white   ">
                <img src={support} alt="" className='w-20 h-20 md:w-28 md:h-28' />
                <h1 className='text-xl  font-semibold hover:text-primary'>Support Services</h1>
                <p className='text-sm'>Round-the-clock support services from CyberRefresh for uninterrupted operations.</p>
                <Link to={'/it-support'} className='gap-1 text-sm text-primary flex items-center justify-center cursor-pointer' >read more <FaArrowRight className='mt-1' size={10}/></Link>
              </div>
                </SwiperSlide>

                <SwiperSlide >
                <div className=" p-2 md:p-4 text-center  rounded-xl h-full flex items-center flex-col justify-center  gap-1 w-fit bg-white   ">
                <img src={integration} alt="" className='w-20 h-20 md:w-28 md:h-28' />
                <h1 className='text-xl  font-semibold hover:text-primary'>Technology Integration</h1>
                <p className='text-sm '>CyberRefresh bridges your technology for seamless, integrated solutions.</p>
                <Link to={'/tech-integration'} className='gap-1 text-sm text-primary flex items-center justify-center cursor-pointer' >read more <FaArrowRight className='mt-1' size={10}/></Link>
              </div>
                </SwiperSlide>


                <SwiperSlide  >
                <div className=" p-2 md:p-4 text-center  rounded-xl h-full flex items-center flex-col justify-center  gap-1 w-fit bg-white   ">
                <img src={digital} alt="" className='w-20 h-20 md:w-28 md:h-28' />
                <h1 className='text-xl  font-semibold hover:text-primary'>Digital Transformation</h1>
                <p className='text-sm'>Empowering businesses through seamless digital transformation at CyberRefresh.</p>
                <Link to={'/digital-transformation'}  className='gap-1 text-sm text-primary flex items-center justify-center cursor-pointer' >read more <FaArrowRight className='mt-1' size={10}/></Link>
              </div>
                </SwiperSlide>


               
          
       
        

      </Swiper>



              </div>

          </div>
        </div>
    </div>
  )
}

export default Services