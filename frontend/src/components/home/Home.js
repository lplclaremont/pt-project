import './Home.css';
import React from 'react';

import lauraHomepage from '../../assets/lauraHomepage.jpeg';

function Home() {
  return (
    <div className="Home">
        <h1>Start your journey towards healthier, happier living</h1>
        <div className="image-container">
            <img src={lauraHomepage} alt="Laura" />
        </div>
    </div>
  );
}

export default Home;
