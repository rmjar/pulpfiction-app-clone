import React, { Component } from 'react';
import classNames from 'classnames';
import { Redirect, Link } from 'react-router-dom'
import './AppBar.css'
import logo from './../../assets/avatar.png';

const userName = "Tomek"

class AppBar extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false
    }

  }
  handleClick = (event) => {
    this.setState((prevState) => ({
      isSignedIn: !prevState.isSignedIn
    }))
  }

  clickOnLogoHandler = () => {
    console.log(this);
   this.props.history.push("/");
  }

  render() {
    const { isSignedIn } = this.state;
    return <div className={
      classNames('appBar')
    } >
      <div className={classNames('logo', 'item')} onClick={() => this.clickOnLogoHandler()}>
        <img src={logo} alt='' /></div>
      <div onClick={this.handleClick} className='item'> {!isSignedIn ? "Log in" : `witaj ${userName}`}</div>
    </div>
  }
}

export default AppBar;