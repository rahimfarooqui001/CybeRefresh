import React from 'react'
import ss from '../assets/images/standard-quality-control-concept-m.jpg'
import bg from '../assets/images/67269.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import consulting from '../assets/images/consulting.jpg'
import support from '../assets/images/support.avif'
import integration from '../assets/images/Integration.avif'
import { FaArrowRight } from "react-icons/fa";
const Services = () => {
  return (
    <div className='bg-red-300 px-44 '>
        <div className="bg-yellow-900 relative flex h-[450px]">
          <div className="w-[30%] h-full relative  bg-blue-600">
            <img src={ss} alt="" className='w-full h-full' />
          </div>
          <div className="w-[70%] relative h-[450px] bg-blue-600">
            <img src={bg} alt="" className='w-full h-full' />
          </div>
          <div className="absolute w-full h-full flex items-center p-10 gap-4 ">
              <div className="service-div px-4 text-center text-white rounded-xl h-72 flex items-center flex-col justify-center py-4 w-[25%] bg-primary opacity-85  ">
                <p className='text-lg font-semibold'>What we do</p>
                <h1 className='text-4xl  font-bold'>Services We <br /> <u>Offer</u></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, omnis!</p>
                <button className='get-started-btn' >Get Started</button>
              </div>
              <div className="bg-red-900 w-[75%]  h-72 ">
                

              <Swiper  
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        spaceBetween={30}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
            1280: {
                slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          768: {
            slidesPerView: 2,
          },
          640:{
            slidesPerView: 2,
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
        className="mySwiper  h-full w-full "
      >

       
       
                <SwiperSlide  >
                <div className="service-div px-4 text-center  rounded-xl h-full flex items-center flex-col justify-center py-4 gap-1 w-[250px] bg-white   ">
                <img src={consulting} alt="" className='w-28 h-28' />
                <h1 className='text-xl  font-semibold hover:text-primary'>IT Consulting Services</h1>
                <p className='text-sm'>Strategic IT consulting from CyberRefresh for smarter, more efficient operations.</p>
                <a className='gap-1 text-sm hover:text-primary flex items-center justify-center cursor-pointer' >read more <FaArrowRight className='mt-1' size={10}/></a>
              </div>
                </SwiperSlide>

                <SwiperSlide  >
                <div className="service-div px-4 text-center  rounded-xl h-full flex items-center flex-col justify-center py-4 gap-1 w-[250px] bg-white   ">
                <img src={support} alt="" className='w-28 h-28' />
                <h1 className='text-xl  font-semibold hover:text-primary'>Support Services</h1>
                <p className='text-sm'>Round-the-clock support services from CyberRefresh for uninterrupted operations.</p>
                <a className='gap-1 text-sm hover:text-primary flex items-center justify-center cursor-pointer' >read more <FaArrowRight className='mt-1' size={10}/></a>
              </div>
                </SwiperSlide>

                <SwiperSlide >
                <div className="service-div px-4 text-center  rounded-xl h-full flex items-center flex-col justify-center py-4 gap-1 w-[250px] bg-white   ">
                <img src={integration} alt="" className='w-28 h-28' />
                <h1 className='text-xl  font-semibold hover:text-primary'>Technology Integration</h1>
                <p className='text-sm '>CyberRefresh bridges your technology for seamless, integrated solutions.</p>
                <a className='gap-1 text-sm hover:text-primary flex items-center justify-center cursor-pointer' >read more <FaArrowRight className='mt-1' size={10}/></a>
              </div>
                </SwiperSlide>


                <SwiperSlide  >
                <div className="service-div px-4 text-center  rounded-xl h-full flex items-center flex-col justify-center py-4 gap-1 w-[250px] bg-white   ">
                <img src={consulting} alt="" className='w-28 h-28' />
                <h1 className='text-xl  font-semibold hover:text-primary'>Digital Transformation</h1>
                <p className='text-sm'>Empowering businesses through seamless digital transformation at CyberRefresh.</p>
                <a className='gap-1 text-sm hover:text-primary flex items-center justify-center cursor-pointer' >read more <FaArrowRight className='mt-1' size={10}/></a>
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