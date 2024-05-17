import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Nav from './Components/Nav.jsx'
import Footer from './Components/Footer'
import About from './Pages/About'
// import {Service} from './Pages/Service/index' 

import {Contact} from './Pages/Contact/index'
import Service from './Pages/Service/index'



function App() {

  return (
    <div className='font-inter'>
      <BrowserRouter>
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service/>} />
            <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
