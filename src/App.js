import React from 'react';
import yifanlogo from './img/yifan-logo.png';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Nav from './Nav';
import Quiz from './Quiz';
import Homework from './Homework';
import Reading from './Reading';
import Hw1 from './Hw1';



function App() {
  return (
    <div className="App">
      <img src={yifanlogo} alt="yifan logo" />
      <Router>
      <Nav />
        <Switch>
          <Route path="/yifan-homework/quiz" component={Quiz} />
          <Route path="/yifan-homework/reading" component={Reading} />
          <Route path="/yifan-homework/homework" exact component={Homework} />
          <Route path="/yifan-homework/homework/hw1" component={Hw1} />
          <Route path="/yifan-homework" exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

const listStyle = {
  fontSize: "x-large"
}

const Home = () => (
   
    
    <div>
      <header className="page-header">
        <h1 style={{color: "rgb(200,30,200)", fontFamily: "arial", fontSize: 100}}>Welcome to Yifan Homework!</h1>
          <h2>Yifan Homework is a session where children can learn mandarin after lessons too! We will provide them with after-class homework, audio recordings, practises as well as quizzes!</h2>
          <h2>It can be categorized into 3 big types: </h2>
            <ul>
              <Link to="/yifan-homework/homework">
                <li style={listStyle}><strong>Homework / Audio Recording (课堂录音)</strong></li>
              </Link> 
              <Link to="/yifan-homework/reading"> 
                <li style={listStyle}><strong>One reading Per Week (每周一篇)</strong></li>
              </Link>
              <Link to="/yifan-homework/quiz">
                <li style={listStyle}><strong>Quizzes or Games (小测或游戏)</strong></li>
              </Link>
            </ul>
      </header>
    </div>
  );


export default App;


 {/*} <header className="App-header">
        // <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header>*/}