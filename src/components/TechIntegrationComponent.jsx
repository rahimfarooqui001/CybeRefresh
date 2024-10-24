import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RiContactsLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from 'react-icons/lia';

const TechIntegrationComponent = () => {
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
    <h1 className="text-[30px] sm:text-[60px]  font-bold  mb-8">Technology Integration</h1>
     <div className='bg-primary w-10 h-1 mb-8'></div>
    <h2 className='mb-12 font-semibold text-xl'>Technology Integration Services by CybeRefresh</h2>
     <p className='mb-12 text-lg'>At CybeRefresh, our Technology Integration services are crafted to elevate your business by seamlessly incorporating cutting-edge technologies into your existing infrastructure. We understand that staying ahead in today’s rapidly evolving digital landscape requires a strategic and well-executed approach to technology adoption. Our team of seasoned experts specializes in guiding organizations through the intricate process of integrating transformative technologies to enhance efficiency, productivity, and overall business performance.</p>
     
    </section>
    <section>
      <h1 className='text-2xl font-bold'>Key Offerings:</h1>
      <div className="ms-5 mt-10">
      <section ref={(el) => sectionsRef.current[1] = el} className="mb-12">
    <h2 className="text-xl font-bold mb-6">1. Customized Integration Strategies:</h2>
       <ul className='text-lg space-y-2 ms-8 '>
           <li>
           Tailor-made solutions that align with your business goals and unique operational requirements.
           </li>
           <li className=''>
           Strategic planning to ensure a smooth integration process without disruption to your daily operations.
           </li>
           
          
       </ul>
    </section>

    <section ref={(el) => sectionsRef.current[2] = el} className="mb-12">
    <h2 className="text-xl font-bold mb-6">2. Cloud Solutions Integration:</h2>
       <ul className='text-lg space-y-2 ms-8'>
           <li>
           Expertise in integrating cloud computing solutions to optimize scalability, flexibility, and cost-effectiveness.
           </li>
           <li>
           Migration strategies to seamlessly transition your business operations to the cloud.
           </li>
         
          
       </ul>
    </section>

    <section ref={(el) => sectionsRef.current[3] = el} className="mb-12">
    <h2 className="text-xl font-bold mb-6">3. IoT (Internet of Things) Integration:</h2>
       <ul className='text-lg space-y-2 ms-8'>
           <li>
           Harness the power of IoT to connect devices, collect valuable data, and enhance decision-making processes.
           </li>
           <li>
           Integration solutions that unlock new possibilities for efficiency, automation, and innovation.
           </li>
           
          
       </ul>
    </section>

    <section ref={(el) => sectionsRef.current[4] = el} className="mb-12">
    <h2 className="text-xl font-bold mb-6">4. Enterprise Resource Planning (ERP) Integration:</h2>
       <ul className='text-lg space-y-2 ms-8'>
           <li >
           Streamline business processes with ERP system integration, ensuring seamless communication across departments.
           </li>
           <li>Enhance visibility and decision-making through the centralized management of critical business functions.Strategic consultations to align your technology roadmap with business goals.
           </li>
          
          
       </ul>
    </section>


    <section ref={(el) => sectionsRef.current[5] = el} className="mb-12">
    <h2 className="text-xl font-bold mb-6">5. Data Management and Analytics Integration:</h2>
       <ul className='text-lg space-y-4 ms-8' >
           <li >
           Integrate robust data management solutions for efficient storage, retrieval, and analysis of business-critical information.
           </li>
           <li>
           Implement advanced analytics tools to extract actionable insights and drive data-driven decision-making.
           </li>
          
          
       </ul>
    </section>
      </div>
    
    </section>


    <section ref={(el) => sectionsRef.current[6] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">Why Choose CybeRefresh for Technology Integration:</h2>
        <ul className='text-lg space-y-4 ms-8' >
            <li >
            <strong>Expert Guidance:</strong>  Leverage the expertise of our seasoned consultants who stay abreast of the latest technological trends.
            </li>
            <li>
            <strong>Custom Solutions:</strong> Receive solutions tailored to your business needs, ensuring a perfect fit for your unique requirements.
            </li>
            <li>
          <strong>Minimized Disruption:</strong> Our strategic approach minimizes disruption during the integration process, allowing for a smooth transition.
            </li>
            <li>
           <strong>Scalability:</strong> Future-proof your business with scalable integration solutions that grow with your evolving needs.
            </li>
           
           
        </ul>
     </section>
     <section ref={(el) => sectionsRef.current[7] = el}>
      <h2  className="text-2xl font-bold mb-6">Get Started on Your Technology Transformation Journey:</h2>
      <p  className='mb-12 text-lg'>Unlock the full potential of your business by integrating technology seamlessly with CybeRefresh. Contact us today to discuss how our Technology Integration services can propel your organization into a more efficient, connected, and technologically advanced future.</p>
     </section>



  
     

     <div className='next-prev-service-div text-[10px] flex flex-col sm:flex-row space-y-2 sm:space-y-0 items-center justify-between  '>
      <Link to={'/it-support'} className="cta-prev ">
  <span className="hover-underline-animation-prev  flex items-center gap-3 text-primary"><LiaLongArrowAltLeftSolid size={25}/>Support Services</span>
</Link>
<Link to={'/digital-transformation'} className="cta-next ">
  <span className="hover-underline-animation-next  flex  items-center  gap-3 text-primary">Digital Transformation<LiaLongArrowAltRightSolid size={25}/></span>
  
</Link>
      </div>
     
     <div className=" absolute top-[700px] sm:top-[500px] right-20 z-50   text-center bg-red-900 mt-auto">
       <Link to={'/contact'} className="bg-primary fixed text-white  px-3 py-3 rounded-full  font-bold">
       <RiContactsLine size={30}/>
       </Link>
     </div>
   </div>
  )
}

export default TechIntegrationComponent