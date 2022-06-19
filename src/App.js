import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home';
import About from './routes/About';
import Calculators from './routes/Calculators';
import Info from './components/Information';
import BodyComp from './routes/BodyComp';




function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/calculators' element={<Calculators />} />
        <Route path='/bodyComposition' element={<BodyComp />} />
        <Route path='/information' element={<Info />} />
      </Routes>
      
    </>
    
  );
}


export default App;
