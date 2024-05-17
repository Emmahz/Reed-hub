import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Nav from './Components/nav'
import Footer from './Components/footer'
import About from './Pages/About'
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes


function App() {

  return (
    <BrowserRouter>
<Nav />
    <Routes>
    <Route path="/" element={<Home />} />
<<<<<<< Updated upstream
          <Route path="/about" element={<About/>}/>
          {/* <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />  */}
=======
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
>>>>>>> Stashed changes

    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
