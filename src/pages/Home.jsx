


import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import SubServices from '../components/SubServices';
import IndustrySpecialization from '../components/IndustrySpecialization';
import Footer from '../components/Footer';
import Crousel from '../components/Crousel';
import Services from '../components/Services';
import LetsTalk from '../components/LetsTalk';
import DigitalTransformationSection from '../components/Digital';

const Home = () => {

  return (
    <div>
    <header>
      <Navbar/>
      <Crousel/>
    </header>
    

      {/* Main Content */}
      <main className="   py-10 ">
        {/* <Services /> */}
        <Services/>
        <DigitalTransformationSection/>
        {/* Call to Action */}
        <LetsTalk/>
        {/* Industry Specialization */}
        <IndustrySpecialization />
      </main>

      <footer>
      {/* <Footer /> */}
      </footer>
    </div>
  );
};

export default Home;




