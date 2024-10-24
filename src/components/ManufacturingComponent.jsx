
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RiContactsLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from 'react-icons/lia';
const ManufacturingComponent = () => {
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
     <h1 className="text-[30px] sm:text-[60px]  font-bold  mb-8">Manufacturing Industry</h1>
      <div className='bg-primary w-10 h-1 mb-8'></div>
      <p className='mb-12 text-lg'> In the dynamic realm of manufacturing, CybeRefresh stands as a pivotal player, delivering innovative IT solutions tailored to optimize operations, fortify cybersecurity, and foster resilience within the sector.
      </p>
      
     </section>

     <section ref={(el) => sectionsRef.current[1] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">1. Operational Efficiency Through Technology Integration:</h2>

        <p className='text-lg my-6'>CybeRefresh focuses on leveraging technology to enhance operational efficiency within manufacturing processes. From automation and robotics to IoT integration, our solutions streamline production, reduce downtime, and elevate overall efficiency.</p>
     </section>
     <section ref={(el) => sectionsRef.current[2] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">2. Supply Chain Resilience:</h2>

        <p className='text-lg my-6'>CybeRefresh pioneers solutions to fortify supply chains, ensuring resilience against disruptions. Our technologies enable real-time tracking, demand forecasting, and inventory management, empowering manufacturers to navigate global complexities.</p>
     </section>
     <section ref={(el) => sectionsRef.current[3] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">3. Cybersecurity Fortification:</h2>

        <p className='text-lg my-6'>The manufacturing industry faces increasing cybersecurity threats. CybeRefresh implements robust measures to safeguard intellectual property, sensitive data, and operational technologies, providing a secure foundation for digital transformation.</p>
     </section>
     <section ref={(el) => sectionsRef.current[4] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">4. Industry 4.0 Implementation:</h2>

        <p className='text-lg my-6'>Embracing the principles of Industry 4.0, CybeRefresh facilitates the integration of digital technologies, data analytics, and smart manufacturing concepts. This transformative approach enhances flexibility, agility, and responsiveness within manufacturing operations.

</p>
     </section>
     <section ref={(el) => sectionsRef.current[5] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">5. Smart Factory Solutions:</h2>

        <p className='text-lg my-6'>Our solutions go beyond traditional manufacturing. CybeRefresh implements smart factory technologies, including real-time monitoring, predictive maintenance, and collaborative robotics, to create adaptive and intelligent production environments.</p>
     </section>
     <section ref={(el) => sectionsRef.current[6] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">6. Quality Control and Assurance:</h2>

        <p className='text-lg my-6'>CybeRefresh utilizes advanced analytics and machine learning for quality control and assurance. Our solutions enable manufacturers to detect defects, optimize production processes, and ensure the delivery of high-quality products to market.

</p>
     </section>
     <section ref={(el) => sectionsRef.current[7] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">7. Energy Efficiency Initiatives:</h2>

        <p className='text-lg my-6'>Sustainability is at the forefront of manufacturing. CybeRefresh introduces technologies that optimize energy consumption, reduce waste, and enhance overall sustainability within manufacturing operations.</p>
     </section>
     <section ref={(el) => sectionsRef.current[8] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">8. Continuous Improvement and Training:</h2>

        <p className='text-lg my-6'>CybeRefresh supports manufacturers in fostering a culture of continuous improvement. Our solutions include training programs and support services that empower staff to adapt to new technologies and embrace ongoing advancements.</p>
     </section>

     <section ref={(el) => sectionsRef.current[9] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">Why Choose CybeRefresh for Manufacturing:</h2>
        <ul className='text-lg space-y-4 ms-8' >
            <li >
            <strong>In-Depth Industry Understanding: </strong>   CybeRefresh possesses profound insights into the specific challenges and opportunities within the manufacturing sector.
            </li>
            <li>
            <strong>Holistic Solutions: </strong>From shop floor optimization to cybersecurity resilience, CybeRefresh provides end-to-end solutions that address the complete manufacturing ecosystem.
            </li>
            <li>
          <strong>Future-Ready Technologies: </strong> We stay ahead of industry trends, ensuring that our clients are equipped with future-ready technologies that drive innovation and competitiveness.
            </li>
          
        </ul>
     </section>

     



     <section className='mb-12'>
        <p className='text-lg'>In an era of digital transformation, CybeRefresh empowers manufacturers to embrace Industry 4.0, fortify operations, and chart a course towards sustained growth and competitiveness. Partner with us to redefine manufacturing excellence through strategic and cutting-edge IT solutions.</p>
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

export default ManufacturingComponent;

