import React, { Component, Fragment } from 'react';
import './App.css';
import AppBar from './component/AppBar';
import Sidebar from './component/Sidebar';
import HomeUser from './component/HomeUser/HomeUser';
import Trainings from './component/Trainings';
import Exercises from './component/Exercises';
import Charts from './component/Charts';
import Favourites from './component/Favourites'

import { BrowserRouter as Router, Route } from "react-router-dom";
import { auth } from './config/fbConfig';
import Training from './component/Training/Training';

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

  state={
    user:{},
    isUser:false,
  }

  unsubscribeAuth = null;

  componentDidMount() {
    fetch('https://pulp-fitness.firebaseio.com/config.json', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ config: data });
      });
    
    this.unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({isUser:true,user});
      } else {
        this.setState({ isUser: false, user:{} });
      }
    })
     
  }

  componentWillUnmount = () => {
    if (this.unsubscribeAuth) {
      this.unsubscribeAuth();
      this.unsubscribeAuth = null;
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route path='/' render={(props)=><AppBar {...props} {...this.state} />} />
            <Route path='/' component={Sidebar} />
            <Route exact path='/' render={(props) => <Charts width="480" height="400" radius="180" {...props} />} />
            <Route path="/" exact render={(props) => <HomeUser {...props} {...this.state} />} />
            <Route path="/trainings/:trainingId?" component={Trainings} />
            <Route path="/exercises/:exerciseId?" component={Exercises} />
            <Route path='/favourites/:uuid?' render={(props) => <Favourites favourites={favourites}{...props} />} />
            <Route path='/training/:uuid?' render={(props) => <Training {...props}></Training>}></Route>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
