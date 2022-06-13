import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home';
import About from './routes/About';
import Calculators from './routes/Calculators';
import Login from './components/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/calculators' element={<Calculators />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
