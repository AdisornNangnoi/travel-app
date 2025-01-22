import About from "./views/About.jsx"
import Contact from "./views/Contact.jsx"
import Home from "./views/Home.jsx"
import Register from "./views/Register.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sau/dti" element={<Register />} />
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
