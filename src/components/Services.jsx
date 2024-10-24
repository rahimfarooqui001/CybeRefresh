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
  const data=[{
    title:'IT Consulting Services',
    img:consulting,
    shortParagraph:'Strategic IT consulting from CyberRefresh for smarter, more efficient operations.',
    to:'/consulting'
  },
  {
    title:'Support Services',
    img:support,
    shortParagraph:'Round-the-clock support services from CyberRefresh for uninterrupted operations.',
    to:'/it-support'
  },
  {
    title:'Technology Integration',
    img:integration,
    shortParagraph:'CyberRefresh bridges your technology for seamless, integrated solutions.',
    to:'/tech-integration'
  },
  {
    title:'Digital Transformation',
    img:digital,
    shortParagraph:'Empowering businesses through seamless digital transformation at CyberRefresh.',
    to:'/digital-transformation'
  }
]
  return (

    
    <div className='  lg:px-20  pt-10'>
        <div className=" relative  sm:flex h-[550px]  sm:h-[280px] md:h-[450px]">
          {/* background images  */}
          <div className="w-[100%]  sm:w-[30%] h-[50%] sm:flex sm:h-full relative ">
            <img src={ss} alt="" className='w-full  h-full aspect-auto object-cover' />
          </div>
          {/* background images  */}
          <div className="w-[100%] sm:w-[70%] h-[50%] relative  sm:flex   sm:h-full md:h-[450px] ">
            <img src={bg} alt="" className='w-full h-full aspect-auto object-cover' />
          </div>
          <div className="absolute top-[5%] sm:top-0     w-full h-full block sm:flex  items-center px-2 md:px-10 gap-4 ">

            {/* services we offer  */}
              <div className="service-div  p-2 sm:px-8 text-center w-[70%] mx-auto  text-white rounded-xl h-[250px] md:h-72 flex  gap-1 flex-col justify-center  sm:w-fit bg-primary opacity-85  ">
                <Link className='text-xl md:text-2xl xl:text-3xl  font-bold'>Services We <br /> Offer</Link>
                <Link to={'/contact'} className='get-started-btn text-sm md:text-md font-semibold mt-10' >Let's Connect</Link>
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
        className="mySwiper services-swiper  h-full w-full rounded-xl "
      >

       
       
               

{
  data.map((item,index)=>(
<SwiperSlide key={index}  >
                <div className=" p-2 md:p-4 text-center  rounded-xl h-full flex items-center flex-col justify-center  gap-1  w-fit bg-white  ">
                <Link to={item.to}><img src={item.img} alt="" className='w-20 h-20 md:w-28 md:h-28 aspect-auto object-cover rounded-xl' /></Link>
                <Link to={item.to} className='text-xl  font-semibold hover:text-primary' >{item.title}</Link>
                <p className='text-sm'>{item.shortParagraph}</p>
                <Link to={item.to} className='gap-1 text-sm text-primary flex items-center justify-center cursor-pointer' >read more <FaArrowRight className='mt-1' size={10}/></Link>
              </div>
                </SwiperSlide>
  ))
}
               

       
        

      </Swiper>



              </div>

          </div>
        </div>
    </div>
  )
}

export default Services