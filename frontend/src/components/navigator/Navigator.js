import '../header/Header.css';
import './Navigator.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../header/Header'

function Navigator() {
  return (
    <div className="Navigator">
        <Header />
        <nav>
            <ul>
                <li> <NavLink to='/about'>About</NavLink></li>
                <li> <NavLink to='/contact'>Contact</NavLink></li>
                <li> <NavLink to='/gallery'>Gallery</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigator;

