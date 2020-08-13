import React from 'react';
import yifanlogo from './img/yifan-logo.png';
import './App.css';
import { Link } from 'react-router-dom';


function Homework() {
  return (
   <div>
      <div className="Homework">
        <h1 style={{color: "green"}}>Homework</h1>
          <h2>This session is for after class lesson.</h2>
      </div>
      
      <div>
        <ul>
          <Link to="/yifan-homework/homework/hw1"><li style={{textAlign:"center"}}>Homework 1</li></Link>
        </ul>
      </div>
    </div> 
  );
}

export default Homework;