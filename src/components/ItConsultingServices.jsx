import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const ItConsultingServices = () => {
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
    <div className="bg-gray-100 py-16 px-10 md:px-32 text-gray-800">
     <section ref={(el) => sectionsRef.current[0] = el}>
     <h1 className="text-[60px]  font-bold  mb-8">IT Consulting Services</h1>
      <div className='bg-primary w-10 h-1 mb-8'></div>
      <p className='mb-12 text-lg'>In the realm of IT consulting, CybeRefresh emerges as a distinctive force, setting new standards in innovation, client-centricity, and transformative impact. Explore the unique facets that elevate CybeRefresh above the conventional, making it a trusted partner in the digital evolution of businesses.</p>
      
     </section>

      <section ref={(el) => sectionsRef.current[1] = el} className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Strategic Innovation</h2>
        <div className='bg-primary w-10 h-1 mb-8'></div>
        <p className="text-lg">
          <strong className='text-[#666666]'>Pioneering Solutions:</strong> CybeRefresh doesn’t merely follow trends; we set them. 
          Our consultants are at the forefront of technological innovation, introducing pioneering solutions 
          that redefine the possibilities for our clients.
        </p>
        <p className="mt-4 text-lg">
          <strong className='text-[#666666]'>Agile Adaptation:</strong> The digital landscape is ever-evolving, and so are we. 
          CybeRefresh excels in agile adaptation, ensuring that our clients not only keep pace with change 
          but lead the way in leveraging emerging technologies.
        </p>
      </section>

      <section ref={(el) => sectionsRef.current[2] = el} className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Client-Centric Approach</h2>
        <div className='bg-primary w-10 h-1 mb-8'></div>
        <p className="text-lg">
          <strong className='text-[#666666]'>Tailored Solutions:</strong> No two businesses are alike, and neither are our solutions. 
          CybeRefresh takes pride in offering tailored IT consulting services that address the unique challenges 
          and aspirations of each client, ensuring a personalized and impactful approach.
        </p>
        <p className="mt-4 text-lg">
          <strong className='text-[#666666]'>Collaborative Success:</strong> We view our clients as partners in success. Through collaborative 
          engagements, we work hand-in-hand to understand their goals and co-create strategies for shared success.
        </p>
      </section>

      <section ref={(el) => sectionsRef.current[3] = el} className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Holistic Expertise</h2>
        <div className='bg-primary w-10 h-1 mb-8'></div>
        <p className="text-lg">
          <strong className='text-[#666666]'>Beyond Technical Fixes:</strong> CybeRefresh offers holistic expertise that spans digital transformation, 
          cybersecurity, cloud integration, and data analytics, providing comprehensive solutions for enduring success.
        </p>
        <p className="mt-4 text-lg">
          <strong className='text-[#666666]'>Cultural Integration:</strong> CybeRefresh ensures that technological advancements align with the 
          cultural fabric of your business for seamless integration.
        </p>
      </section>

      <section ref={(el) => sectionsRef.current[4] = el} className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Proactive Cybersecurity</h2>
        <div className='bg-primary w-10 h-1 mb-8'></div>
        <p className="text-lg">
          <strong className='text-[#666666]'>Guardians of Digital Fortresses:</strong> CybeRefresh provides proactive cybersecurity measures, 
          ensuring your digital assets remain secure and resilient.
        </p>
        <p className="mt-4 text-lg">
          <strong className='text-[#666666]'>Continuous Vigilance:</strong> We stay ahead of emerging threats, implementing measures to 
          secure your digital ecosystem.
        </p>
      </section>

      <section ref={(el) => sectionsRef.current[5] = el} className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Strategic Partnerships</h2>
        <div className='bg-primary w-10 h-1 mb-8'></div>
        <p className="text-lg">
          <strong className='text-[#666666]'>Your Success, Our Mission:</strong> We form strategic partnerships, dedicated to walking every step of 
          your digital journey, offering insights that foster continuous growth.
        </p>
        <p className="mt-4 text-lg">
          <strong className='text-[#666666]'>Beyond Consultation:</strong> CybeRefresh aligns IT strategies with overarching business objectives, 
          driving sustainable success through technology.
        </p>
      </section>
      
      <div className="text-center mt-16">
        <button className="bg-primary text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-secondary">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ItConsultingServices;
