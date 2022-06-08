import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './routes/Home'
import About from './routes/About'
import Calculators from './routes/Calculators'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/calculators' element={<Calculators />} />
      </Routes>
    </>
  );
}

export default App;
