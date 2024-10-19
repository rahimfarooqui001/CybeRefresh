import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"


function App() {

  return (
    <div className="">
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/About-Us" element={<AboutUs/>}/>
     <Route path="/Contact" element={<Contact/>}/>
     <Route path="/Blog" element={<Blog/>}/>



    

    </Routes>
    </div>
  )
}

export default App
