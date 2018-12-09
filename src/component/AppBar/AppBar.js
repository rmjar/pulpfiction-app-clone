import React, {
  Component
} from 'react';
import classNames from 'classnames';
import './AppBar.css'
import logo from './avatar.png';

const userName = "Tomek"

class AppBar extends Component {
  constructor(){
    super();
    this.state = {
      isSignedIn: false
    }

  }
  handleClick = (event) => {
    this.setState((prevState) =>({
      isSignedIn: !prevState.isSignedIn
    }))
  }
  render() {
    const {
      isSignedIn 
    } = this.state;
    return <div className = {
        classNames('AppBar')
      } >
      <div className = { classNames('logo')}>
        <img src={logo}/>
      </div>
      <div  onClick={this.handleClick}>{!isSignedIn ? "log in": `witaj ${userName}`}</div>
      </div>
  }
}

export default AppBar;