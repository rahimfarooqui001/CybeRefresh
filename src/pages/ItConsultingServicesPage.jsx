import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import ItConsultingServices from '../components/ItConsultingServices';

const ItConsultingServicesPage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-[#eaeaea]">
    <div className="max-w-screen-xl w-full  bg-white ">
      <div className="divider bg-primary h-1 sm:w-full m-0"></div>
      <Navbar />
      <ItConsultingServices />
    <Footer />
    </div>
  </div>
  )
}

export default ItConsultingServicesPage