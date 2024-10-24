import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RiContactsLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from 'react-icons/lia';
const DigitalTransformationComponent = () => {
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
     <h1 className="text-[30px] sm:text-[60px]  font-bold  mb-8">Digital Transformation</h1>
      <div className='bg-primary w-10 h-1 mb-8'></div>
      <p className='mb-6 text-lg'>    At CybeRefresh, we propel businesses into the future through strategic Digital Transformation. Our unwavering commitment is to guide organizations through the ever-evolving digital landscape, helping them harness the full potential of technology for sustained growth and success.
      </p>

      <p className='mb-12 text-lg'><strong>Our Approach: </strong>  Embark on a transformative journey with CybeRefresh, where innovation meets practicality. Our tailored solutions are designed to streamline processes, enhance efficiency, and unlock new opportunities in the digital realm.</p>
      
     </section>

     <section ref={(el) => sectionsRef.current[1] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">Services We Offer:</h2>
        <ul className='text-lg space-y-2 ms-8 '>
            <li>
          <strong>Strategic Planning:</strong> Craft a roadmap for success with our expert strategists who understand the intricacies of digital evolution.
            </li>
            <li >
        <strong>Technology Integration:</strong> Seamlessly integrate cutting-edge technologies into your operations for enhanced productivity and competitiveness.
            </li>
            <li>
         <strong>Data Analytics:</strong>  Leverage the power of data with advanced analytics, gaining actionable insights to drive informed decision-making.
            </li>
            <li>
         <strong>Cybersecurity Consulting:</strong>   Safeguard your digital assets with our comprehensive cybersecurity solutions, ensuring a secure and resilient digital infrastructure.
            </li>
           
        </ul>
     </section>

     <section ref={(el) => sectionsRef.current[2] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">Why Choose CybeRefresh:</h2>
        <ul className='text-lg space-y-2 ms-8'>
            <li>
          <strong>Expertise:</strong>Our seasoned consultants bring a wealth of experience and deep industry knowledge to every digital transformation project.
            </li>
            <li >
        <strong>Innovation:</strong>  Stay ahead in the digital race with our commitment to embracing the latest technologies and trends.
            </li>
            <li>
         <strong>Results-Driven:</strong>  We measure success by the tangible impact of our solutions on your business – improved efficiency, heightened security, and sustained growth.
            </li>
          
           
        </ul>
     </section>

     <section ref={(el) => sectionsRef.current[3] = el} className="mb-12" >
     <p className='mb-12 text-lg'><strong>Client Success Stories: </strong>  Explore real-world examples of businesses that have undergone remarkable digital transformations with CybeRefresh. Hear firsthand how our strategic guidance has propelled organizations to new heights.</p>
 
     </section>

     <section ref={(el) => sectionsRef.current[4] = el} className="mb-12" >
     <p className='mb-12 text-lg'><strong>Get Started:  </strong>   Ready to embark on your digital transformation journey? Contact us today to discuss how CybeRefresh can tailor a solution to meet your unique needs and drive your business into the digital future.</p>
 
     </section>

    
      
     <div className='next-prev-service-div text-[10px] flex flex-col sm:flex-row space-y-2 sm:space-y-0 items-center justify-between '>
     <Link to={'/tech-integration'} className="cta-prev ">
  <span className="hover-underline-animation-prev  flex items-center gap-3 text-primary"><LiaLongArrowAltLeftSolid size={25}/>Technology Integration
  </span>
</Link>
      </div>
     
      
      <div className=" absolute top-[700px] sm:top-[500px] right-20 z-50   text-center bg-red-900 mt-auto">
        <Link to={'/contact'} className="bg-primary fixed text-white  px-3 py-3 rounded-full  font-bold">
        <RiContactsLine size={30}/>
        </Link>
      </div>
    </div>
  );
};

export default DigitalTransformationComponent;





