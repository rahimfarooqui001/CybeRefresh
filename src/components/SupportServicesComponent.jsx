import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RiContactsLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from 'react-icons/lia';
const SupportServicesComponent = () => {
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
     <h1 className="text-[30px] sm:text-[60px]  font-bold  mb-8">Support Services</h1>
      <div className='bg-primary w-10 h-1 mb-8'></div>
     <h2 className='mb-12 font-semibold text-xl'>Support Services by CybeRefresh: Empowering Your Business for Success</h2>
      <p className='mb-12 text-lg'>At CybeRefresh, we understand that robust support services are the backbone of any thriving business. Our comprehensive suite of support offerings is designed to empower your organization, allowing you to focus on your core competencies while we handle the intricacies of technology, cybersecurity, and operational support. Explore how our support services can elevate your business to new heights.</p>
      
     </section>

     <section ref={(el) => sectionsRef.current[1] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">1. Managed IT Support:</h2>
        <ul className='text-lg space-y-2 ms-8'>
            <li>
          Proactive monitoring and management of your IT infrastructure.
            </li>
            <li className=''>
          Rapid issue resolution to minimize downtime and disruptions.
            </li>
            <li className=''>
           Customized support plans tailored to your specific needs.
            </li>
           
        </ul>
     </section>

     <section ref={(el) => sectionsRef.current[2] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">2. Cybersecurity Support:</h2>
        <ul className='text-lg space-y-2 ms-8'>
            <li>
          Robust cybersecurity measures to safeguard your digital assets.
            </li>
            <li>
           Continuous monitoring for potential threats and vulnerabilities.
            </li>
            <li>
           Incident response planning and execution to ensure a swift and effective response to cyber threats.
            </li>
           
        </ul>
     </section>

     <section ref={(el) => sectionsRef.current[3] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">3. Technical Helpdesk:</h2>
        <ul className='text-lg space-y-2 ms-8'>
            <li>
           Responsive and knowledgeable helpdesk support for your employees.
            </li>
            <li>
           Troubleshooting assistance for hardware, software, and network issues.
            </li>
            <li>
           Streamlined ticketing system for efficient issue resolution.
            </li>
           
        </ul>
     </section>

     <section ref={(el) => sectionsRef.current[4] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">4. On-Demand Consultation:</h2>
        <ul className='text-lg space-y-2 ms-8'>
            <li >
           Access to our expert consultants for on-demand advice and guidance.
            </li>
            <li>
           Strategic consultations to align your technology roadmap with business goals.
            </li>
            <li>
           Assistance in navigating complex technological challenges.
            </li>
           
        </ul>
     </section>


     <section ref={(el) => sectionsRef.current[5] = el} className="mb-12">
     <h2 className="text-2xl font-bold mb-6">5. Outsourcing Support Services:</h2>
     <p className='mb-4'>Outsourcing support services to CybeRefresh can provide numerous benefits for your business:</p>
        <ul className='text-lg space-y-4 ms-8' >
            <li >
            <strong>Cost Efficiency:</strong> Outsourcing support services often proves more cost-effective than maintaining an in-house team, allowing you to allocate resources more strategically.
            </li>
            <li>
            <strong>Access to Expertise:</strong> Benefit from the specialized knowledge and expertise of our seasoned professionals without the overhead of hiring and training an in-house team.
            </li>
            <li>
          <strong>Focus on Core Competencies:</strong> Free up your internal resources to focus on core business functions, while we handle the day-to-day support and operational aspects.
            </li>
            <li>
           <strong>Scalability:</strong> As your business grows, our outsourcing services can scale to meet your evolving needs, ensuring consistent and reliable support.
            </li>
            <li>
            <strong>Enhanced Productivity:</strong> Minimize downtime and enhance productivity with our proactive support services, keeping your business operations running smoothly.
            </li>
           
        </ul>
     </section>



     <section className='mb-12'>
        <h2 className='text-lg'>At CybeRefresh, we view support services as a partnership — a collaborative effort to ensure your business remains resilient, secure, and ready for the challenges of tomorrow. Contact us to explore how our support services and outsourcing solutions can be tailored to amplify the success of your business.</h2>
     </section>

     <div className='next-prev-service-div text-[10px] flex flex-col sm:flex-row space-y-2 sm:space-y-0 items-center justify-between  '>
      <Link to={'/consulting'} className="cta-prev ">
  <span className="hover-underline-animation-prev  flex items-center gap-3 text-primary"><LiaLongArrowAltLeftSolid size={25}/>IT Consulting Services</span>
</Link>
<Link to={'/tech-integration'} className="cta-next ">
  <span className="hover-underline-animation-next  flex  items-center  gap-3 text-primary">Technology Integration<LiaLongArrowAltRightSolid size={25}/></span>
  
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

export default SupportServicesComponent;


