
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Navigation, Autoplay,EffectFade, Pagination } from 'swiper/modules';
// import B1 from '../assets/images/banner1.jpg';
// import B2 from '../assets/images/banner2.jpg';
// import B3 from '../assets/images/banner3.jpg';
// import B4 from '../assets/images/banner4.jpg';

// const Crousel = () => {
//   return (
//     <div className='py-8  bg-white h-[300px] lg:h-[450px] max-w-screen-2xl container'>
//       <Swiper
//       speed={200}
//         cssMode={true}
//         mousewheel={true}
//         loop={true}
//         pagination={{
//           clickable: true,
//         }}
//         // autoplay={{
//         //   disableOnInteraction: true,
//         // }}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//           },
//           768: {
//             slidesPerView: 1.5,
//             spaceBetween: 10,
//             centeredSlides: true,
//           },
//           1024: {
//             slidesPerView: 1.5,
//             spaceBetween: 30,
//             centeredSlides: true,
//           },
//           1440:{
//             slidesPerView: 2,
//             spaceBetween: 30,
//             centeredSlides: true,
//           }
//         }}
//         navigation={true}
//         modules={[Navigation, Autoplay, Pagination,EffectFade]}
//         className="mySwiper banner-swiper h-full rounded-3xl"
//         watchSlidesProgress={true}
//       >
//         <SwiperSlide className='relative'>
//           <img src={B1} alt="" className="w-full h-full rounded-3xl" />
//           <div className="absolute inset-0  p-5 bg-black bg-opacity-25 flex flex-col items-end justify-end gap-4 rounded-3xl">
//            <div className="bg-primary p-2 md:px-10   md:py-4 rounded-lg">
//            <h1 className='text-sm lg:text-3xl font-bold text-white'>Your Success Our Priority</h1>
//            </div>
//             <p className='text-sm md:text-lg bg-black p-2  bg-opacity-50 md:px-10 md:py-6 w-fit  text-white'>
//               Whether it's navigating complex challenges, implementing transformative technologies, or ensuring robust cybersecurity, we are here to elevate your business to new heights.
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className='relative'>
//           <img src={B2} alt="" className="w-full h-full rounded-3xl" />
//           <div className="absolute inset-0 flex  flex-col items-end justify-end gap-4 text-center p-5 bg-black bg-opacity-25 rounded-3xl">
//            <div className="bg-primary py-2 px-2 md:px-10 md:py-4 rounded-lg w-fit">
//            <h1 className='text-sm md:text-xl font-bold text-white '>Revitalize Your Business</h1>
//            </div>
//             <div className="bg-black p-2  bg-opacity-50  md:px-10 md:py-6 w-fit">
//             <p className='text-xs md:text-lg  text-white'>
//             Partner with CybeRefresh for a journey that refreshes your technology landscape and revitalizes your business for sustained success.
//             </p>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className='relative'>
//           <img src={B3} alt="" className="w-full h-full rounded-3xl" />
         

// <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-5 gap-2 bg-black bg-opacity-25 rounded-3xl">
//             <h1 className='text-sm md:text-xl font-bold text-white mb-4  py-2 px-2 md:px-10 md:py-4 bg-primary rounded-lg'>Enhancing User Experience</h1>
//             <p className='text-sm md:text-lg text-white p-2 md:py-4 md:px-4 bg-black bg-opacity-50'>
//             We specialize in crafting intuitive and user-friendly experiences that facilitate seamless technology adoption within your organization.
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className='relative'>
//           <img src={B4} alt="" className="w-full h-full rounded-3xl" />
//           <div className="absolute inset-0 flex flex-col items-start justify-end text-center p-5 bg-black bg-opacity-25 rounded-3xl">
//             <h1 className='text-sm md:text-xl font-bold text-white mb-4  py-2 px-2 md:px-10 md:py-4 bg-primary rounded-lg'>Data-driven Insights</h1>
//             <p className='text-sm md:text-lg text-white p-2 md:py-4 md:px-4 bg-black bg-opacity-50'>
//             From organizing and securing your data to implementing sophisticated analytics tools, we guide you through the entire data lifecycle.
//             </p>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Crousel;




import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper/modules';
import B1 from '../assets/images/banner1.jpg';
import B2 from '../assets/images/banner2.jpg';
import B3 from '../assets/images/banner3.jpg';
import B4 from '../assets/images/banner4.jpg';

const Crousel = () => {
  return (
    <div className='py-8 w-full bg-white h-[300px] lg:h-[450px] max-w-screen-5xl '>
      <Swiper
        speed={200}
        cssMode={true}
        mousewheel={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // Add autoplay with a slight delay
          disableOnInteraction: false, // Do not stop autoplay on interaction
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 10,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 30,
            centeredSlides: true,
          },
          1440: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: true,
          },
          1600: {
            slidesPerView: 2.5,
            spaceBetween: 40,
            centeredSlides: true,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        navigation={true}
        modules={[Navigation, Autoplay, Pagination, EffectFade]}
        className="mySwiper banner-swiper h-full rounded-3xl"
        watchSlidesProgress={true}
      >
        <SwiperSlide className='relative'>
          <img src={B1} alt="" className="w-full h-full rounded-3xl" />
          <div className="absolute inset-0 p-5 bg-black bg-opacity-25 flex flex-col items-end justify-end gap-4 rounded-3xl">
            <div className="bg-primary p-2 md:px-10 md:py-4 rounded-lg">
              <h1 className='text-sm lg:text-3xl font-bold text-white'>Your Success Our Priority</h1>
            </div>
            <p className='text-sm md:text-lg bg-black p-2 bg-opacity-50 md:px-10 md:py-6 w-fit text-white'>
              Whether it's navigating complex challenges, implementing transformative technologies, or ensuring robust cybersecurity, we are here to elevate your business to new heights.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={B2} alt="" className="w-full h-full rounded-3xl" />
          <div className="absolute inset-0 flex flex-col items-end justify-end gap-4 text-center p-5 bg-black bg-opacity-25 rounded-3xl">
            <div className="bg-primary py-2 px-2 md:px-10 md:py-4 rounded-lg w-fit">
              <h1 className='text-sm md:text-xl font-bold text-white'>Revitalize Your Business</h1>
            </div>
            <div className="bg-black p-2 bg-opacity-50 md:px-10 md:py-6 w-fit">
              <p className='text-xs md:text-lg text-white'>
                Partner with CyberRefresh for a journey that refreshes your technology landscape and revitalizes your business for sustained success.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={B3} alt="" className="w-full h-full rounded-3xl" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-5 gap-2 bg-black bg-opacity-25 rounded-3xl">
            <h1 className='text-sm md:text-xl font-bold text-white mb-4 py-2 px-2 md:px-10 md:py-4 bg-primary rounded-lg'>Enhancing User Experience</h1>
            <p className='text-sm md:text-lg text-white p-2 md:py-4 md:px-4 bg-black bg-opacity-50'>
              We specialize in crafting intuitive and user-friendly experiences that facilitate seamless technology adoption within your organization.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={B4} alt="" className="w-full h-full rounded-3xl" />
          <div className="absolute inset-0 flex flex-col items-start justify-end text-center p-5 bg-black bg-opacity-25 rounded-3xl">
            <h1 className='text-sm md:text-xl font-bold text-white mb-4 py-2 px-2 md:px-10 md:py-4 bg-primary rounded-lg'>Data-driven Insights</h1>
            <p className='text-sm md:text-lg text-white p-2 md:py-4 md:px-4 bg-black bg-opacity-50'>
              From organizing and securing your data to implementing sophisticated analytics tools, we guide you through the entire data lifecycle.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Crousel;
