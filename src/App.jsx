import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import ItConsultingServicesPage from "./pages/ItConsultingServicesPage"
import SupportServicesPage from "./pages/SupportServicesPage"
import TechIntegrationPage from "./pages/TechIntegrationPage"
import DigitalTransPage from "./pages/DigitalTransPage"
import EducationTechPage from "./pages/EducationTechPage"
import HospitalityPage from "./pages/HospitalityPage"
import ManufacturingPage from "./pages/ManufacturingPage"
import HealthcarePage from "./pages/HealthcarePage"


function App() {

  return (
    <div className="">
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/About-Us" element={<AboutUs/>}/>
     <Route path="/Contact" element={<Contact/>}/>
     <Route path="/Blog" element={<Blog/>}/>
     <Route path="/consulting" element={<ItConsultingServicesPage/>}/>
     <Route path="/it-support" element={<SupportServicesPage/>}/>
     <Route path="/tech-integration" element={<TechIntegrationPage/>}/>
     <Route path="/digital-transformation" element={<DigitalTransPage/>}/>
     <Route path="/education-tech" element={<EducationTechPage/>}/>
     <Route path="/hospitality" element={<HospitalityPage/>}/>
     <Route path="/manufacturing" element={<ManufacturingPage/>}/>
     <Route path="/healthcare" element={<HealthcarePage/>}/>



    </Routes>
    </div>
  )
}

export default App
