import './Home.css';
import React from 'react';

import lauraHomepage from '../../assets/lauraHomepage.jpeg';

function Home() {
    return (
        <div className="Home">
            <h1>Start your journey towards healthier, happier living</h1>
            <div className="summaryContainer">
                <div className="textSummary">
                    {/* Add your text summary here */}
                    <p>Your text summary goes here.</p>
                </div>
                <div className="image-container">
                    {/* Add your image here */}
                    <img src={lauraHomepage} alt="Laura" />
                </div>
            </div>
        </div>
    );
  }

export default Home;
