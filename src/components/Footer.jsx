

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
    <div className='relative  '>
      {/* <footer className="footer flex flex-col md:flex-row justify-between px-4 md:px-32 bg-[#27313D] text-white p-10">
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
            <FaHandshake size={25} /> Contact Info
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
      </footer> */}

      <div className="divider bg-primary h-1 w-full m-0 -mt-2"></div>
      <footer className="footer bg-[#27313D]  text-white px-4 md:px-20 py-4">
        <aside className="grid-flow-col items-center h-full">
          <p className='text-[10px] sm:text-xs md:text-sm  h-full flex items-center '>
            Copyright © 2023 CybeRefresh. All rights reserved.
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-1  sm:gap-4 card">
            {/* <Link to="#">
              <IoLogoWhatsapp size={30}/>
            </Link>
            <Link to="#">
             <FaFacebook size={30}/>
            </Link>
            <Link to="#">
              <FaInstagramSquare size={30}/>
            </Link> */}
          
  <a href="#" className="socialContainer containerOne">
    <svg className="socialSvg instagramSvg" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
  </a>
  
  <a href="#" className="socialContainer containerTwo">
    <svg className="socialSvg twitterSvg" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path> </svg>              </a>
    
  <a href="#" className="socialContainer containerThree">
    <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
  </a>
  
  <a href="#" className="socialContainer containerFour">
    <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
  </a>


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


