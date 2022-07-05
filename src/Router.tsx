import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import LandingPage from './pages/Home/LandingPage';



export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} >
        <Route path='/home' element={<LandingPage/>} />
      </Route>
    </Routes>
  );
}
