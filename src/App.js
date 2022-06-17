import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Calculators from './routes/Calculators';
import Login from './components/Login';
import Info from './components/Information';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/calculators' element={<Calculators />} />
        <Route path='/login' element={<Login />} />
        <Route path='/information' element={<Info />} />
      </Routes>
      
    </>
    
  );
}


export default App;
