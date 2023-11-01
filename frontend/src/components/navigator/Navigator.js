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
                <div>
                  <li className="title"> <NavLink to='/about'>
                    <span className="text">About</span>
                    <div className="line"></div>
                  </NavLink></li>
                </div>
                <li> <NavLink to='/contact'>Contact</NavLink></li>
                <div className="line"></div>
                <li> <NavLink to='/gallery'>Gallery</NavLink></li>
                <div className="line"></div>
            </ul>
        </nav>
    </div>
  )
}

export default Navigator;

