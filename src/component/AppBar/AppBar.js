import React, { Component } from 'react';
import classNames from 'classnames';
import './AppBar.css'
import logo from './../../assets/avatar.png';
import { connect } from 'react-redux';


import LoginLinks from './LoginLinks';
import LogoutLinks from './LogoutLinks';
import { auth } from '../../config/fbConfig';


class AppBar extends Component {

  unsubscribeAuth = null;

  componentDidMount() {
    this.unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (user) {

      } else {

      }
    })
  }

  componentWillUnmount = () => {
    if (this.unsubscribeAuth) {
      this.unsubscribeAuth();
      this.unsubscribeAuth = null;
    }
  }

  clickOnLogoHandler = () => {
    this.props.history.push("/");
  }

  render() {
    return <div className={classNames('appBar')} >
      <div className={classNames('logo', 'item')} onClick={() => this.clickOnLogoHandler()}>
        <img src={logo} alt='' />
      </div>
      <div onClick={this.handleClick} className='item'>
        {!auth.currentUser ? <LogoutLinks /> : <LoginLinks />}
      </div>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps, null)(AppBar);