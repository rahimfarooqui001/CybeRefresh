


import React from 'react';
import Navbar from '../components/Navbar';
import IndustrySpecialization from '../components/IndustrySpecialization';
import Footer from '../components/Footer';
import Crousel from '../components/Crousel';
import Services from '../components/Services';
import LetsTalk from '../components/LetsTalk';
import WhoWeAreComponent from '../components/WhoWeAreComponent';


const Home = () => {

  return (
    <div>
    <header >
      <Navbar/>
      <Crousel />
    </header>
    

      {/* Main Content */}
      <main className="   py-10 ">
        {/* <Services /> */}
        <Services/>
        {/* Who We Are Component */}
        <WhoWeAreComponent/>
        {/* Call to Action */}
        <LetsTalk/>
        {/* Industry Specialization */}
        <IndustrySpecialization />
      </main>

      <Footer />
    </div>
  );
};

export default Home;




