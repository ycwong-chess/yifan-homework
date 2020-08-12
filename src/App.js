import React from 'react';
import yifanlogo from './img/yifan-logo.png';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
      <header>
        <img src={yifanlogo} alt="yifan logo" />
        <h1 style={{color: "rgb(200,30,200)", fontFamily: "arial", fontSize: 100}}>Welcome to Yifan Homework!</h1>
          <h2>Yifan Homework is a session where children can learn mandarin after lessons too! We will provide them with after-class homework, audio recordings, practises as well as quizzes!</h2>
          <h2>It can be categorized into 3 big types</h2>
            <ul>
              <li><strong>Audio Recording (课堂录音)</strong></li>
              <li><strong>One reading Per Week (每周一篇)</strong></li>
              <li><strong>Quizzes or Games (小测或游戏)</strong></li>
            </ul>
      </header> 
    </div>
  );
}

export default App;
