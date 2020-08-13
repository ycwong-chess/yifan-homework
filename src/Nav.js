import React from 'react';
import yifanlogo from './img/yifan-logo.png';

import './App.css';
import { Link } from 'react-router-dom';


function Nav() {

  const navStyle={
    color: "black"
  }

  return (
    <nav className="Nav1">
        <h2>Navigation</h2>
        <ul className="nav-links">
            <Link style={navStyle} to="/yifan-homework"><li>Homepage</li></Link>
            <Link style={navStyle} to="/yifan-homework/homework"><li>Homework</li></Link>
            <Link style={navStyle} to="/yifan-homework/reading"><li>One Reading Per Week</li></Link>
            <Link style={navStyle} to="/yifan-homework/quiz"><li>Quizzes & Games</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;