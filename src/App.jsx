import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Nav from './Components/nav'
import Footer from './Components/footer'
import About from './Pages/About'

import {Contact} from './Pages/Contact/index'



function App() {

  return (
    <BrowserRouter>
<Nav />
    <Routes>
    <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/Contact" element={<Contact />} />

    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
