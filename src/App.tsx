import React, { MutableRefObject, useRef } from 'react';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Contact />
    </>
  );
}

export default App;
