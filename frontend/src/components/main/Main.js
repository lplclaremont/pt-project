import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import Contact from '../contact/Contact';
import Gallery from '../gallery/Gallery';

function Main() {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
    </Routes>
  )
}

export default Main;
