import './NavigatorButton.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigatorButton({path, text}) {
  return (
    <>
        <li>
        <NavLink to={path} className="title">
            <span className="text">{text}</span>
            <div className="line"></div>
        </NavLink>
        </li>
    </>
  )
}

export default NavigatorButton;
