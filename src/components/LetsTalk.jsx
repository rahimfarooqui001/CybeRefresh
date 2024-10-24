import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const LetsTalk = () => {
  const navigate = useNavigate()
  const sectionsRef = useRef([]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1,
          y: 0,
          duration: 2,
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
    <div>
       <div className="flex justify-center sm:px-20   mb-10">
          <section ref={(el) => sectionsRef.current[0] = el} className="bg-secondary text-center w-3/2 px-10 py-8 space-y-8">
            <h1 className="text-2xl font-semibold text-img">In the Cyber Realm...Refresh is the new Lifeline</h1>
            <p className="text-md md:text-lg text-gray-400">
              At CybeRefresh, our unwavering commitment is to empower users with state-of-the-art technology, 
              ensuring they stay at the forefront of innovation.
            </p>
            <div className="lets-talk-div">
            <button onClick={()=>navigate('/Contact')}
              type="submit"
              className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-primary text-white 
              backdrop-blur-md lg:font-semibold isolation-auto border-primary px-4 py-2 overflow-hidden border-2 
              rounded-full group transition-all duration-300 hover:bg-black hover:text-white"
            >
              Let's Talk
              <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear 
                duration-300 rounded-full border border-white group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-white group-hover:fill-gray-800"
                />
              </svg>
            </button>
            </div>
          </section>
        </div> 
    </div>
  )
}

export default LetsTalk