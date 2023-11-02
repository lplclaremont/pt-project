import './Home.css';
import React from 'react';

import lauraHomepage from '../../assets/lauraHomepage.jpeg';

function Home() {
    return (
        <div className="Home">
            <h1>Start your journey towards healthier, happier living</h1>
            <div className="summaryContainer">
                <div className="infoContainer">
                <div className="textContainer">
                    <p>Lift & nourish is here to help you! Life long habits aren't easy to start but once maintained, you'll barely notice them.</p>
                </div>
                <div className="linksContainer">
                    <p>Useful links go here!</p>
                </div>
                </div>
                <div className="imageContainer">
                    <img src={lauraHomepage} alt="Laura" />
                </div>
            </div>
        </div>
    );
  }

export default Home;
