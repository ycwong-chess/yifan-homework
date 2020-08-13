import React from 'react';
import yifanlogo from './img/yifan-logo.png';
import './App.css';
import trialVideo1 from './vdo/trial-video.mp4';


function Hw1() {
  return (
    <div>
      <div className="Homework">
        <h1>Homework 1</h1>
          <h2>Please read the content / listen to the audio below.</h2>
      </div>
      
      <body>
        <div>
          <video width="80%" controls muted>
            <source src={trialVideo1} type="video/mp4" />
          </video>
        </div>
      </body>
    </div>
  );
}

export default Hw1;