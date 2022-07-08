import React, { MutableRefObject, useRef } from 'react';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />  
      <Contact />
    </>
  );
}

export default App;
