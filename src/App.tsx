import React, { MutableRefObject, useRef } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Gallery from './components/Gallery/Gallery';
import Services from './components/Services';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Gallery />
      <Services />
    </>
    // <div
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: '100vh',
    //   }}
    // >
    //   Page is down, visit sometime later!
    // </div>
  );
}

export default App;
