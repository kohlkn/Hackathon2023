import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom'
import Home from './Pages/Home'
import Survey from './Pages/Survey'
import Itinerary from './Pages/Itinerary'
import Navbar from './Pages/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path = '/' element = {<Home />} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Survey' element={<Survey/>} />
        <Route path='/Itinerary' element={<Itinerary/>} />

      </Routes>
    </Router>
  );
}

export default App;
