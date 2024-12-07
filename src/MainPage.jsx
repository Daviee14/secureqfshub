import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';




function MainPage() {
 

  return (
    <div className=" mx-auto  ">
     <Hero/>
     <Features/>
     <Footer/>
    </div>
  );
}

export default MainPage;