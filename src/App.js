import React, { Component } from 'react';
import './App.css';
import Charts from './component/Charts';
import AppBar from './component/AppBar';
import Sidebar from './component/Sidebar';




class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Sidebar/>
        <Charts width="480" height="400" radius ="180"/>
      </div>
    );
  }
}

export default App;
