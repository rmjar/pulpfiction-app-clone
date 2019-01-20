import React, { Component, Fragment } from 'react';
import './App.css';
import AppBar from './component/AppBar';
import Sidebar from './component/Sidebar';
import HomeUser from './component/HomeUser/HomeUser';
import Training from './component/Trainings';
import Exercises from './component/Exercises';
import Charts from './component/Charts';
import Favourites from './component/Favourites'

import { BrowserRouter as Router, Route } from "react-router-dom";

const favourites = [
  {
    uuid: 1,
    name: 'Fav 1'
  },
  {
    uuid: 2,
    name: ' Fav 2'
  },
  {
    uuid: 3,
    name: ' Fav 3'
  },
  {
    uuid: 4,
    name: ' Fav 4'
  }
]

class App extends Component {
  componentDidMount() {
    fetch('https://pulp-fitness.firebaseio.com/config.json', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ config: data });
      });
    
     
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route path='/' component={AppBar} />
            <Route path='/' component={Sidebar} />
            <Route exact path='/' render={(props) => <Charts width="480" height="400" radius="180" {...props} />} />
            <Route path="/" exact component={HomeUser} />
            <Route path="/trainings/:trainingId?" component={Training} />
            <Route path="/exercises/:exerciseId?" component={Exercises} />
            <Route path='/favourites/:uuid?' render={(props) => <Favourites favourites={favourites}{...props} />} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
