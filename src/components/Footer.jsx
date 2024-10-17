

import React, { useState, useEffect } from 'react';
import { RiEdit2Fill } from "react-icons/ri";
import { FaArrowUp, FaHandshake, FaUsersLine } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { FaWhatsappSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      const footerTop = footer.getBoundingClientRect().top;
      const footerHeight = footer.offsetHeight;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // If the user is near or below the footer, show the button
      if (footerTop < windowHeight || scrollY + windowHeight >= document.body.offsetHeight - footerHeight) {
        gsap.to('.scroll-to-top', { opacity: 1, visibility: 'visible', duration: 0.5 });
        setShowScroll(true);
      } else if (scrollY < document.body.offsetHeight - footerHeight - 200) {
        // Hide the button if scrolling up far enough from the footer
        gsap.to('.scroll-to-top', { opacity: 0, visibility: 'hidden', duration: 0.5 });
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='relative'>
      <footer className="footer flex flex-col md:flex-row justify-between px-4 md:px-32 bg-[#27313D] text-white p-10">
        {/* Footer content */}
        <nav className="mb-6 md:mb-0">
          <h6 className="normal-case font-bold text-xl flex justify-center items-center gap-2">
            <FaUsersLine className='mt-1' size={25} /> About Us
          </h6>
          <div className="divider divider-success w-1/2 md:w-[170px] m-0 -mt-2"></div>
          <p className="text-sm w-fit lg:w-[400px]">
          Welcome to CybeRefresh, where innovation meets transformation, and the future of technology unfolds. At CybeRefresh, we are more than just consultants; we are architects of change, navigating the realms of technology to empower businesses across diverse industries.
          </p>
        </nav>

        <nav className="mb-6 md:mb-0">
          <h6 className="normal-case font-bold text-xl flex justify-center items-center gap-2">
            <RiEdit2Fill size={25} /> Recent Posts
          </h6>
          <div className="divider divider-success w-1/2 md:w-[170px] m-0 -mt-2"></div>
          <Link to="/post/cloud-choice" className="link link-hover hover:text-primary text-sm">Is Cloud the Right Choice?</Link>
          <Link to="/post/information-security" className="link link-hover hover:text-primary text-sm">Information Security</Link>
          <Link to="/post/growth-tech-consultation" className="link link-hover hover:text-primary text-sm">Fostering Growth Through Technology Consultation</Link>
          <Link to="/post/digital-potential" className="link link-hover hover:text-primary text-sm">Unleashing Digital Potential</Link>
        </nav>

        <nav>
          <h6 className="normal-case font-bold text-xl flex justify-center items-center gap-2">
            <FaHandshake /> Contact Info
          </h6>
          <div className="divider divider-success w-1/2 md:w-[190px] m-0 -mt-2"></div>
          <p className="text-sm">Hyderabad | Telangana | India</p>
          <p className="text-sm">Email: info@cyberefresh.com</p>
          <p className="text-sm">Website: www.cyberefresh.com</p>
          <Link to="/contact" className="link link-hover flex justify-center items-center gap-2 text-sm">
            <div className='bg-primary rounded-full p-3'>
              <IoCallOutline size={20} />
            </div>
            <p> Call us on <br />
              <span className='hover:text-primary'>+918187877193</span>
            </p>
          </Link>
        </nav>
      </footer>

      <div className="divider bg-primary h-1 w-full m-0 -mt-2"></div>
      <footer className="footer bg-white px-4 md:px-10 py-4">
        <aside className="grid-flow-col items-center">
          <p className='text-xs md:text-sm'>
            Copyright © 2023 CybeRefresh. All rights reserved.
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link to="#">
              <IoLogoWhatsapp size={30}/>
            </Link>
            <Link to="#">
             <FaFacebook size={30}/>
            </Link>
            <Link to="#">
              <FaInstagramSquare size={30}/>
            </Link>
          </div>
        </nav>
      </footer>

      {/* Scroll-to-top Button */}
      <button
        className='scroll-to-top text-white rounded-md bg-primary opacity-0 p-2 fixed bottom-10 right-5 cursor-pointer'
        onClick={scrollToTop}
        style={{ visibility: showScroll ? 'visible' : 'hidden' }}
      >
        <FaArrowUp size={25} />
      </button>
    </div>
  );
}

export default Footer;


