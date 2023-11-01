import '../header/Header.css';
import './Navigator.css';
import React from 'react';
import Header from '../header/Header'
import NavigatorButton from '../navigatorButton/NavigatorButton'

function Navigator() {
  return (
    <div className="Navigator">
        <Header />
        <nav>
            <ul>
                <NavigatorButton path='/about' text="About" />
                <NavigatorButton path='/contact' text="Get in touch" />
                <NavigatorButton path='/gallery' text="Gallery" />
            </ul>
        </nav>
    </div>
  )
}

export default Navigator;

