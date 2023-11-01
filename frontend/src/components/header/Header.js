import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <NavLink to='/' className="headerTitle">
        <span className="text">Lift and Nourish</span>
        <div className="line"></div>
      </NavLink>
    </div>
  );
}

export default Header;

