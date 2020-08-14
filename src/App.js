import React from 'react';
import yifanlogo from './img/yifan-logo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Nav from './Nav';
import Quiz from './Quiz';
import Quiz1 from './Quiz1';
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
          <Route path="/yifan-homework/quiz" exact component={Quiz} />
            <Route path="/yifan-homework/quiz/quiz1" component={Quiz1} />
          <Route path="/yifan-homework/reading" component={Reading} />
          <Route path="/yifan-homework/homework" exact component={Homework} />
          <Route path="/yifan-homework/homework/hw1" component={Hw1} />
          <Route path="/yifan-homework" exact component={Home}/>
          {/*<Route render={() => <Redirect to={{pathname: "/yifan-homework"}} />} />*/}
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
          <h2>Yifan Homework is a platform where children can learn mandarin at home too! We will provide them with after-class homework, audio recordings, practises as well as quizzes!</h2>
          {/*<h2>It can be categorized into 3 big types: </h2>*/}
            <ul>
              <Link to="/yifan-homework/homework">
                <li style={listStyle}><strong>Homework / Audio Recording (课堂录音)</strong></li>
              </Link> 
              <Link to="/yifan-homework/reading"> 
                <li style={listStyle}><strong>One Reading Per Week (每周一篇)</strong></li>
              </Link>
              <Link to="/yifan-homework/quiz">
                <li style={listStyle}><strong>Quizzes and Games (小测和游戏)</strong></li>
              </Link>
            </ul>
      </header>
    </div>
  );

export default App;