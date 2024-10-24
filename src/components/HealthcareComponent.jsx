
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RiContactsLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from 'react-icons/lia';
const HealthcareComponent = () => {
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
     <h1 className="text-[30px] sm:text-[60px]  font-bold  mb-8">Healthcare Solutions</h1>
      <div className='bg-primary w-10 h-1 mb-8'></div>
      <p className='mb-12 text-lg'>In the ever-evolving landscape of healthcare, CybeRefresh emerges as a catalyst for transformative change, delivering cutting-edge IT solutions that enhance patient care, fortify cybersecurity, and revolutionize the delivery of healthcare services.      

      </p>
      
     </section>

     <section ref={(el) => sectionsRef.current[1] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">1. Patient-Centric Technologies:</h2>

        <p className='text-lg my-6'>CybeRefresh places patients at the center of healthcare innovation. Our solutions include patient portals, telehealth platforms, and mobile applications, ensuring seamless communication, accessibility, and engagement for improved overall patient experiences.</p>
     </section>
     <section ref={(el) => sectionsRef.current[2] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">2. Cybersecurity for Patient Data Protection:</h2>

        <p className='text-lg my-6'>Securing patient data is paramount. CybeRefresh implements robust cybersecurity measures, safeguarding electronic health records (EHRs), ensuring compliance with healthcare regulations, and mitigating the risk of cyber threats that could compromise patient confidentiality.</p>
     </section>
     <section ref={(el) => sectionsRef.current[3] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">3. Healthcare Analytics for Informed Decision-Making:</h2>

        <p className='text-lg my-6'>Our advanced analytics solutions provide healthcare providers with actionable insights. CybeRefresh enables data-driven decision-making, optimizing resource allocation, identifying trends, and improving overall operational efficiency.</p>
     </section>
     <section ref={(el) => sectionsRef.current[4] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">4. Electronic Health Record (EHR) Optimization:</h2>

        <p className='text-lg my-6'>CybeRefresh enhances the functionality and interoperability of EHR systems. We streamline data entry, improve data accuracy, and facilitate seamless information exchange among healthcare professionals, contributing to cohesive patient care.</p>
     </section>
     <section ref={(el) => sectionsRef.current[5] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">5. Telemedicine Integration:</h2>

        <p className='text-lg my-6'>As a pioneer in telemedicine solutions, CybeRefresh facilitates the seamless integration of virtual healthcare services. From remote consultations to telemonitoring, our technologies bridge the gap between healthcare providers and patients, ensuring accessible and efficient care.</p>
     </section>
     <section ref={(el) => sectionsRef.current[6] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">6. IoT in Healthcare for Remote Monitoring:</h2>

        <p className='text-lg my-6'>Utilizing the Internet of Things (IoT), CybeRefresh implements remote monitoring solutions. From wearable devices to smart healthcare equipment, our technologies enable continuous monitoring of patient health, supporting preventive and proactive care.</p>
     </section>
     <section ref={(el) => sectionsRef.current[7] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">7. Healthcare Supply Chain Optimization:</h2>

        <p className='text-lg my-6'>CybeRefresh optimizes healthcare supply chains, ensuring timely access to essential medical resources. Our solutions include inventory management, demand forecasting, and data-driven procurement strategies to enhance the resilience of healthcare systems.</p>
     </section>
     <section ref={(el) => sectionsRef.current[8] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">8. Compliance and Regulatory Adherence:</h2>

        <p className='text-lg my-6'>Navigating complex healthcare regulations is simplified with CybeRefresh. Our solutions ensure healthcare providers adhere to compliance standards, safeguarding patient information and mitigating legal risks associated with regulatory non-compliance.</p>
     </section>

     <section ref={(el) => sectionsRef.current[9] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">Why Choose CybeRefresh for Healthcare:</h2>
        <ul className='text-lg space-y-4 ms-8' >
            <li >
            <strong>Healthcare Expertise:  </strong>   CybeRefresh boasts deep understanding and expertise in the nuances of the healthcare industry.

            </li>
            <li>
            <strong>Comprehensive Solutions:  </strong> From patient engagement to cybersecurity, our solutions cover the entire healthcare spectrum.
            </li>
            <li>
          <strong>Innovation Leadership: </strong>  Staying at the forefront of healthcare technology, CybeRefresh enables providers to embrace innovations that redefine patient care.
            </li>
          
        </ul>
     </section>

     



     <section className='mb-12'>
        <p className='text-lg'>In the pursuit of healthcare excellence, CybeRefresh stands as a strategic partner, empowering healthcare providers with technologies that elevate patient care, enhance operational efficiency, and contribute to the ongoing transformation of the healthcare ecosystem. Partner with us for a future where healthcare is not just delivered but optimized through innovative IT solutions.</p>
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

export default HealthcareComponent;




