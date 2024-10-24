
import React, { useEffect, useRef } from 'react';
import cloud from '../assets/images/blog-cloud.jpg';
import ITSecurity from '../assets/images/ITSecurity.avif';
import { LuCalendarCheck } from "react-icons/lu";
import TechConsultation from '../assets/images/TechnologyConsultation.avif';
import DigitalPotential from '../assets/images/Digital-Potential.jpg';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const BlogComponent = () => {
  const data = [
    {
      img: cloud,
      imgHeading: 'Is Cloud the Right Choice?',
      publishDate: 'November 26, 2023',
      heading: 'Navigating the Skies: Is Cloud the Right Choice for Your Business?',
      shortParagraph: 'In the ever-evolving landscape of technology, the question of whether to migrate to the cloud is no longer a matter of if but when. The cloud,',
      to:'/Cloud'
    },
    {
      img: ITSecurity,
      imgHeading: 'Information Security',
      publishDate: 'September 26, 2023',
      heading: 'Fortifying Your Digital Citadel',
      shortParagraph: 'In the interconnected world of technology, where data reigns supreme, the importance of information security cannot be overstated. As businesses navigate the complex landscape of cyber threats,',
      to:'/infosecurity'
    },
    {
      img: TechConsultation,
      imgHeading: 'The Dynamics of Digital Transformation',
      publishDate: 'December 22, 2022',
      heading: 'Fostering Growth Through Technology Consultation',
      shortParagraph: 'In the ever-evolving landscape of technology, businesses are faced with both unprecedented opportunities and complex challenges.',
      to:'/techconsultation'
    },
    {
      img: DigitalPotential,
      imgHeading: 'The Evolution of Digital Presence',
      publishDate: 'December 22, 2021',
      heading: 'Unleashing Digital Potential',
      shortParagraph: 'In the fast-paced digital landscape, where user experience is paramount, the significance of robust web and app development cannot be overstated. Enter CybeRefresh—a dynamic force committed to not just creating',
      to:'/DigitalPotential'
    },
   
  ];

  const cardsContainerRef = useRef(null);

  // useEffect(() => {
  //   if (data.length > 0) {
  //     data.map((item,index)=>console.log(index))
  //     const leftCards = [cardsContainerRef.current.children[1], cardsContainerRef.current.children[3]]; // First and third card
  //     const rightCards = [cardsContainerRef.current.children[0], cardsContainerRef.current.children[2]]; // Second and fourth card

  //     // Animate left side cards from the right
  //     gsap.fromTo(
  //       leftCards,
  //       { x: 50, opacity: 0 },
  //       { x: 0, opacity: 1, duration: 1.5, ease: "power3.out", stagger: 0.3 }
  //     );

  //     // Animate right side cards from the left
  //     gsap.fromTo(
  //       rightCards,
  //       { x: -50, opacity: 0 },
  //       { x: 0, opacity: 1, duration: 1.5, ease: "power3.out", stagger: 0.3 }
  //     );
  //   }
  // }, [data]);

  // useEffect(() => {
  //       if (data.length > 0) {
  //         gsap.fromTo(
  //           cardsContainerRef.current.children,
  //           { opacity: 0, scale: 0.8, y: 50, rotation: 5 },
  //           {
  //             opacity: 1,
  //             scale: 1,
  //             y: 0,
  //             rotation: 0,
  //             duration: 1.2,
  //             ease: "power3.out",
  //             stagger: 0.3, // Stagger the animation for each card
  //           }
  //         );
  //       }
  //     }, [data]);

  useEffect(() => {
 
  if (data.length > 0) {
    gsap.fromTo(
      cardsContainerRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.4, // Stagger the animation for each card
      }
    );
  }
}, [data]);
    

  const navigate = useNavigate();

  return (
    <div ref={cardsContainerRef} className="main-blog-div grid grid-cols-1 lg:grid-cols-2 py-10 px-2 sm:px-20 gap-8">
      {data.map((item,index) => (
        <div 
          key={index} 
          className="w-full blog-hover-effect  shadow-xl"
        > 
          <Link to={item.to}><span></span></Link>
          <div className="relative w-full h-[250px] sm:h-[300px] mt-[3px] rounded-tl-[1px] rounded-tr-[3px]">
            <img src={item?.img} alt={item?.imgHeading} className="w-full h-full rounded-tl-[3px] rounded-tr-[3px] object-cover aspect-auto" />
            <div className="absolute   inset-0 rounded-tl-[3px] rounded-tr-[3px] bg-black opacity-40"></div>
            <div className="absolute  inset-0 flex mt-12 gap-4 ms-4 sm:ms-10">
              <div className="bg-primary w-4 h-14"></div>
              <p className="text-white text-2xl cursor-pointer sm:text-3xl md:text-4xl font-bold drop-shadow-md">{item?.imgHeading}</p>
            </div>
          </div>
          <div className="px-4 my-4 space-y-4">
            <p className='gap-2 flex items-center text-gray-500 text-sm'>
              <LuCalendarCheck size={20} /> {item?.publishDate}
            </p>
            <h1 className='text-xl font-semibold text-primary'>{item?.heading}</h1>
            <p>{item.shortParagraph}<Link to={'/'} className='text-primary'>...more</Link></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogComponent;

