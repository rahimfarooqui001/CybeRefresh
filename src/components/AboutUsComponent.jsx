import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import visionImage from '../assets/images/VisionImage.jpg'; 
import teamImage from '../assets/images/WhoWeAre.jpg';
import OurAproach from '../assets/images/OurAproach.avif';
import WhyChoose from '../assets/images/WhyChoose.jpg'
import SetUsApart from '../assets/images/SetUsApart.jpg'
const AboutUsComponent = () => {
  const aboutRef = useRef();
  const visionRef = useRef();
  const whoWeAreRef = useRef();
  const approachRef = useRef();
  const commitmentRef = useRef();

  useEffect(() => {
    gsap.fromTo(aboutRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.3 });
    gsap.fromTo(visionRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, delay: 0.5 });
    gsap.fromTo(whoWeAreRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, delay: 0.7 });
    gsap.fromTo(approachRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 1 });
    gsap.fromTo(commitmentRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, delay: 1.3 });
  }, []);

  return (
    <div className="bg-gray-100 px-6 sm:px-10 md:px-28">
      <section className="p-4 sm:p-10 bg-white" ref={aboutRef}>
        <div className="text-center">
          <h1 className=" text-xl sm:text-4xl font-bold mb-6 text-gray-800">Welcome to CybeRefresh</h1>
          <p className="text-lg text-gray-600">
          where innovation meets transformation, and the future of technology unfolds. At CybeRefresh, we are more than just consultants; we are architects of change, navigating the realms of technology to empower businesses across diverse industries.
          </p>
         
        </div>
      </section>

      {/* Vision Section */}
      <section className="p-4 sm:p-10 flex flex-col lg:flex-row gap-10 items-center bg-gray-50" ref={visionRef}>
        <img src={visionImage} alt="Vision" className="rounded-lg w-full lg:w-1/2 object-cover shadow-lg" />
        <div className="lg:w-1/2">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-800">Our Vision: <span className='text-tertiary font-semibold'>Empowering Tomorrow, Today</span> </h2>
          <p className="mt-4 text-gray-600">
          At the core of CybeRefresh is a vision to empower businesses with transformative technologies, unlocking their full potential in an ever-evolving digital landscape. We envision a future where technology is not just a tool but a strategic catalyst for growth and resilience.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="p-4 sm:p-10 flex flex-col lg:flex-row-reverse gap-10 items-center bg-white" ref={whoWeAreRef}>
        <img src={teamImage} alt="Team" className="rounded-lg h-[200px] sm:h-[400px] md:h-[500px] w-full lg:w-1/2 object-cover shadow-lg" />
        <div className="lg:w-1/2">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-800">Who We Are: <span className='text-tertiary font-semibold'>Passionate Pioneers of Change</span></h2>
          <p className="mt-4 text-gray-600">
          We are a team of passionate individuals driven by a common purpose—to redefine the possibilities of technology and guide businesses toward unprecedented success. Our diverse expertise spans industries, and our collective passion fuels the innovation that sets CybeRefresh apart.
          </p>
        </div>
      </section>

      {/* What We Believe */}

      <section className="p-4 sm:p-10 flex flex-col lg:flex-row gap-10 items-center bg-gray-50" ref={approachRef}>
        <img src={OurAproach} alt="Innovation" className="rounded-lg w-full lg:w-1/2 object-cover shadow-lg" />
        <div className="lg:w-1/2">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-800">What We Believe: <span className='text-tertiary font-semibold'>Innovation, Collaboration, Excellence.</span></h2>
          <p className="mt-4 text-gray-600">
          Innovation is the heartbeat of CybeRefresh. We believe in fostering a culture where collaboration fuels creativity, and excellence becomes the standard. Our commitment is to provide solutions that not only meet today’s challenges but also anticipate the opportunities of tomorrow.
          </p>
        </div>
      </section>

      {/* Why Choose CybeRefresh */}

      <section className="p-4 sm:p-10 flex flex-col lg:flex-row-reverse gap-10 items-center bg-white" ref={whoWeAreRef}>
        <img src={WhyChoose} alt="Team" className="rounded-lg w-full lg:w-1/2 object-cover shadow-lg" />
        <div className="lg:w-1/2">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-800">Why Choose CybeRefresh: <span className='text-tertiary font-semibold'>Beyond Consultation, Toward Partnership.</span></h2>
          <p className="mt-4 text-gray-600">
          Choosing CybeRefresh means choosing more than just a consultancy; it means forging a partnership. We go beyond providing solutions; we embark on a journey with our clients, navigating the complexities of technology together and ensuring that every step forward is a step toward enduring success.
          </p>
        </div>
      </section>
      

      {/* Our Approach */}
      <section className="p-4 sm:p-10 flex flex-col lg:flex-row gap-10 items-center bg-gray-50" ref={approachRef}>
        <img src={OurAproach} alt="Innovation" className="rounded-lg   w-full lg:w-1/2 object-cover shadow-lg" />
        <div className="lg:w-1/2">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-800">Our Approach: <span className='text-tertiary font-semibold'>Strategic, Holistic, Future-Ready</span></h2>
          <p className="mt-4 text-gray-600">
          Our approach is rooted in strategy, guided by a holistic understanding of our clients’ needs, and future-ready in its execution. CybeRefresh is not just a service provider; we are architects of comprehensive solutions designed to propel businesses into the future.
          </p>
        </div>
      </section>

      {/* What Sets Us Apart */}

      <section className="p-4 sm:p-10 flex flex-col lg:flex-row-reverse gap-10 items-center bg-white" ref={whoWeAreRef}>
        <img src={SetUsApart} alt="Team" className="rounded-lg  w-full lg:w-1/2 object-cover shadow-lg" />
        <div className="lg:w-1/2">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-800">What Sets Us Apart: <span className='text-tertiary font-semibold'>Innovative Minds, Proven Results.</span></h2>
          <p className="mt-4 text-gray-600">
          What sets CybeRefresh apart is the combination of innovative minds and a track record of proven results. Our team brings together diverse talents, experiences, and perspectives to craft solutions that not only meet but exceed expectations.
          </p>
        </div>
      </section>
      

      {/* Commitment Section */}
      <section className="p-4 sm:p-10 bg-white text-center" ref={commitmentRef}>
        <h2 className="text-xl sm:text-3xl font-bold text-gray-800">Our Commitment: <span className='text-tertiary font-semibold'>Your Success, Our Mission</span></h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        At CybeRefresh, our commitment is simple—your success is our mission. We are dedicated to navigating the intricacies of technology, steering our clients toward growth, resilience, and a future where their ambitions become achievements.
        </p>
      </section>
    </div>
  );
};

export default AboutUsComponent;
