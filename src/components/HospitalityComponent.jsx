
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RiContactsLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from 'react-icons/lia';
const HospitalityComponent = () => {
  const sectionsRef = useRef([]);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        });
    });
  }, []);

  return (
    <div className="relative py-16 px-4 md:px-10 lg:px-32 text-gray-800 support-services-div">

     <section ref={(el) => sectionsRef.current[0] = el}>
     <h1 className="text-[30px] sm:text-[60px]  font-bold  mb-8">Hospitality Industry</h1>
      <div className='bg-primary w-10 h-1 mb-8'></div>
      <p className='mb-12 text-lg'>In the dynamic world of hospitality, CybeRefresh emerges as a leading provider of transformative IT solutions, dedicated to enhancing guest experiences, optimizing operations, and fortifying cybersecurity within the sector.
      </p>
      
     </section>

     <section ref={(el) => sectionsRef.current[1] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">1. Seamless Guest Experiences:</h2>

        <p className='text-lg my-6'>CybeRefresh focuses on technology solutions that elevate guest experiences. From mobile check-ins to personalized amenities, we implement innovative technologies that create a seamless and memorable journey for each guest.</p>
     </section>
     <section ref={(el) => sectionsRef.current[2] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">2. Robust Cybersecurity Measures:</h2>

        <p className='text-lg my-6'>Protecting guest privacy and securing critical operations is paramount in the hospitality sector. CybeRefresh implements robust cybersecurity measures, safeguarding sensitive data, and ensuring the integrity of digital transactions.</p>
     </section>
     <section ref={(el) => sectionsRef.current[3] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">3. Operational Efficiency Through Technology:</h2>

        <p className='text-lg my-6'>Our IT solutions are designed to optimize operational efficiency. From reservation systems to inventory management, CybeRefresh streamlines hospitality operations, reducing manual efforts and enhancing overall productivity.</p>
     </section>
     <section ref={(el) => sectionsRef.current[4] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">4. Smart Room Technologies:</h2>

        <p className='text-lg my-6'>CybeRefresh pioneers the integration of smart technologies within guest rooms. From smart lighting and climate control to in-room entertainment systems, our solutions enhance guest comfort and satisfaction while promoting energy efficiency.</p>
     </section>
     <section ref={(el) => sectionsRef.current[5] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">5. Contactless Services for Health and Safety:</h2>

        <p className='text-lg my-6'>In response to evolving health and safety considerations, CybeRefresh implements contactless technologies. This includes touchless check-ins, mobile room keys, and digital concierge services, ensuring a safe and hygienic environment for guests.</p>
     </section>
     <section ref={(el) => sectionsRef.current[6] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">6. Data Analytics for Business Insights:</h2>

        <p className='text-lg my-6'>Derive meaningful insights from guest behavior, preferences, and operational metrics. CybeRefresh leverages advanced data analytics to provide actionable intelligence, enabling informed decision-making for improved service delivery and revenue optimization.</p>
     </section>
     <section ref={(el) => sectionsRef.current[7] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">7. Reservation and Booking System Optimization:</h2>

        <p className='text-lg my-6'>Our experts optimize reservation and booking systems to ensure a smooth and user-friendly experience for guests. This includes integration with online travel agencies (OTAs) and seamless connectivity with property management systems.</p>
     </section>
     <section ref={(el) => sectionsRef.current[8] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">8. 24/7 Support and Training:</h2>

        <p className='text-lg my-6'>CybeRefresh provides continuous support services to hospitality establishments. Our round-the-clock support ensures uninterrupted operations, while tailored training programs empower staff to maximize the benefits of implemented technologies.</p>
     </section>

     <section ref={(el) => sectionsRef.current[9] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">Why Choose CybeRefresh for Hospitality:</h2>
        <ul className='text-lg space-y-4 ms-8' >
            <li >
            <strong>Industry Insight: </strong>    Our team possesses a deep understanding of the unique challenges and trends within the hospitality sector.
            </li>
            <li>
            <strong>End-to-End Solutions: </strong> From guest-facing technologies to back-end operations, CybeRefresh offers comprehensive IT solutions for the entire hospitality ecosystem.
            </li>
            <li>
          <strong>Innovation Leadership:  </strong>We stay at the forefront of technological innovations, ensuring that our clients remain competitive in a rapidly evolving industry.
            </li>
          
        </ul>
     </section>

     



     <section className='mb-12'>
        <p className='text-lg'>CybeRefresh transforms the hospitality experience through strategic and innovative IT solutions. Partner with us to redefine guest satisfaction, streamline operations, and embrace the future of hospitality with confidence and efficiency.</p>
     </section>

     {/* <div className='next-prev-service-div text-[10px] flex flex-col sm:flex-row space-y-2 sm:space-y-0 items-center justify-end  '>
    
<Link to={'/hospitality'} className="cta-next ">
  <span className="hover-underline-animation-next  flex  items-center  gap-3 text-primary">Hospitality Industry<LiaLongArrowAltRightSolid size={25}/></span>
  
</Link>
      </div> */}
      

     
      
      {/* <div className=" absolute top-[700px] sm:top-[500px] right-20 z-50   text-center bg-red-900 mt-auto">
        <Link to={'/contact'} className="bg-primary fixed text-white  px-3 py-3 rounded-full  font-bold">
        <RiContactsLine size={30}/>
        </Link>
      </div> */}

      
    </div>
  );
};

export default HospitalityComponent;

