import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"


function App() {

  return (
    <div className="">
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/About-Us" element={<AboutUs/>}/>

    

    </Routes>
    </div>
  )
}

export default App
