
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RiContactsLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from 'react-icons/lia';
const EducationTechComponent = () => {
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
     <h1 className="text-[30px] sm:text-[60px]  font-bold  mb-8">Education Technology</h1>
      <div className='bg-primary w-10 h-1 mb-8'></div>
      <p className='mb-12 text-lg'>    In the ever-evolving landscape of education, CybeRefresh stands as a dedicated partner, providing comprehensive IT consultation and support services crafted to elevate educational institutions to new heights.


      </p>
      
     </section>

     <section ref={(el) => sectionsRef.current[1] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">1.  Digital Transformation Strategy:</h2>

        <p className='text-lg my-6'>CybeRefresh collaborates with educational leaders to develop and implement strategic digital transformation roadmaps. Our consultants envision a future where technology enhances learning experiences, enabling institutions to adapt and thrive in the digital era.</p>
     </section>
     <section ref={(el) => sectionsRef.current[2] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">2. Cybersecurity Resilience:</h2>

        <p className='text-lg my-6'>Safeguarding sensitive educational data is paramount. CybeRefresh ensures robust cybersecurity measures, protecting student information, maintaining data integrity, and implementing proactive strategies to counter evolving cyber threats.</p>
     </section>
     <section ref={(el) => sectionsRef.current[3] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">3. Cloud Integration for Scalability:</h2>

        <p className='text-lg my-6'>Our experts seamlessly integrate cloud solutions tailored to educational needs. From facilitating remote learning to optimizing administrative processes, CybeRefresh empowers institutions with scalable and flexible cloud technologies.</p>
     </section>
     <section ref={(el) => sectionsRef.current[4] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">4. Learning Management Systems (LMS) Optimization:</h2>

        <p className='text-lg my-6'>CybeRefresh enhances the functionality and efficiency of Learning Management Systems, creating an intuitive and user-friendly experience for both educators and students. We streamline content delivery, assessment, and collaboration within the LMS framework.</p>
     </section>
     <section ref={(el) => sectionsRef.current[5] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">5. Data Analytics for Educational Insights:</h2>

        <p className='text-lg my-6'>Unlock the power of data with CybeRefresh’s advanced analytics solutions. We help educational institutions derive meaningful insights from data, enabling informed decision-making for improved teaching methodologies, student performance, and resource allocation.</p>
     </section>
     <section ref={(el) => sectionsRef.current[6] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">6. Technology Infrastructure Support:</h2>

        <p className='text-lg my-6'>CybeRefresh provides comprehensive support for educational technology infrastructure. From maintaining network reliability to ensuring optimal performance of classroom technologies, our services guarantee a seamless learning environment.</p>
     </section>
     <section ref={(el) => sectionsRef.current[7] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">7. Interactive Classroom Technologies:</h2>

        <p className='text-lg my-6'>Enhance the learning experience with interactive classroom technologies. CybeRefresh implements and supports solutions that foster engagement, such as smartboards, video conferencing tools, and collaborative learning platforms.</p>
     </section>
     <section ref={(el) => sectionsRef.current[8] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">8. Continuous Training and Support:</h2>

        <p className='text-lg my-6'>Our commitment extends beyond implementation. CybeRefresh offers continuous training programs and dedicated support services to empower educators and staff, ensuring they can leverage technology effectively for enhanced teaching and administrative functions.</p>
     </section>

     <section ref={(el) => sectionsRef.current[9] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">Why Choose CybeRefresh for Education:</h2>
        <ul className='text-lg space-y-4 ms-8' >
            <li >
            <strong>Specialized Expertise: </strong>   Our consultants possess in-depth knowledge of the unique challenges and opportunities within the education sector.
            </li>
            <li>
            <strong>Holistic Solutions: </strong> CybeRefresh offers end-to-end solutions, from strategic planning to hands-on implementation and ongoing support.
            </li>
            <li>
          <strong>Future-Ready Approach: </strong> We align educational institutions with technologies that prepare them for future advancements in pedagogy, administration, and student engagement.
            </li>
          
        </ul>
     </section>

     



     <section className='mb-12'>
        <p className='text-lg'>As the educational landscape evolves, CybeRefresh remains committed to providing innovative IT consultation and support services, fostering a technologically empowered environment where learning knows no bounds. Partner with us to shape the future of education through strategic, secure, and transformative IT solutions.</p>
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

export default EducationTechComponent;