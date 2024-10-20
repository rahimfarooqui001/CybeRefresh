import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import ItConsultingServicesPage from "./pages/ItConsultingServicesPage"
import SupportServicesPage from "./pages/SupportServicesPage"


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





    

    </Routes>
    </div>
  )
}

export default App
