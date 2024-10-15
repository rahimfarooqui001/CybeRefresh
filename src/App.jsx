import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"


function App() {

  return (
    <div className="">
    <Routes>
     <Route path="/" element={<Home/>}/>
     {/* <Route path="/cart" element={<Cart/>}/>
     <Route path="/Signup" element={<SignUp/>}/>
     <Route path="/wishlist" element={<Wishlist/>}/> */}

    </Routes>
    </div>
  )
}

export default App
