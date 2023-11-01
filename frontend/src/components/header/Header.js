import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
        <h1>
          <NavLink to='/' className="headerTitle">Lift and Nourish</NavLink>
        </h1>
    </div>
  )
}

export default Header;
