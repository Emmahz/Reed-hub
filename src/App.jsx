import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Services from './Pages/Service'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import {Contact} from './Pages/Contact/index'



function App() {

  return (
    <BrowserRouter>
<Nav />
    <Routes>
    <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />

    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
