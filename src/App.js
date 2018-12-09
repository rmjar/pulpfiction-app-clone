import React, { Component } from 'react';
import './App.css';
import Charts from './Charts';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Charts width="480" height="400" radius ="180"/>
      </div>
    );
  }
}

export default App;
