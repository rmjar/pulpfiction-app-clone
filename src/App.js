import React, { Component } from 'react';
import './App.css';
import AppBar from './component/AppBar';
import {Route, BrowserRouter as Router} from "react-router-dom"
import HomeUser from './component/HomeUser/HomeUser';
import Training from './component/Trainings';
import Exercises from './component/Exercises';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <>
            <Route path="/" component={AppBar} />
            <Route path="/" exact component={HomeUser} />
            <Route path="/trainings/:trainingId?" component={Training} />
            <Route path="/exercises/:exerciseId?" component={Exercises} />

            {/* <Route path="/" component={Footer} /> */}
          </>
        </Router>
      </div>
    );
  }
}

export default App;
