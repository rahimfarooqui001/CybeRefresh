
import React from 'react';
import IndustrySpecialization from '../components/IndustrySpecialization';
import Crousel from '../components/Crousel';
import Services from '../components/Services';
import LetsTalk from '../components/LetsTalk';
import WhoWeAreComponent from '../components/WhoWeAreComponent';
import Layout from '../layout/Layout';


const Home = () => {

  return (
  <>
  <Layout Children={[
    <Crousel />,
    <Services/>,
    <WhoWeAreComponent/>,
    <LetsTalk/>,
    <IndustrySpecialization />,
  ]}/>
  </>
  );
};

export default Home;




