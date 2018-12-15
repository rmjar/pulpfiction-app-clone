import React, { Component } from 'react';
import './App.css';
import Charts from './component/Charts';
import AppBar from './component/AppBar';
import Sidebar from './component/Sidebar';
import ListView from './component/ListView/ListView';
import TreningsView from "./component/TreningsView";
import {Route, BrowserRouter as Router} from "react-router-dom"
import HomeUser from './component/HomeUser/HomeUser';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <>
            <Route path="/" component={AppBar} />
            <Route path="/" exact component={HomeUser} />
            <Route path="/trenings/" component={TreningsView} />
            {/* <Route path="/" component={Footer} /> */}
          </>
        </Router>
      </div>
    );
  }
}

export default App;
