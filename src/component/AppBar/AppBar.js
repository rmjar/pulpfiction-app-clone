import React, { Component } from 'react';
import classNames from 'classnames';
import './AppBar.css'
import logo from './../../assets/avatar.png';
import { connect } from 'react-redux';


import LoginLinks from './LoginLinks';
import LogoutLinks from './LogoutLinks';


class AppBar extends Component {



  clickOnLogoHandler = () => {
    this.props.history.push("/");
  }

  render() {
    const {user, isUser} = this.props;
    return <div className={classNames('appBar')} >
      <div className={classNames('logo', 'item')} onClick={() => this.clickOnLogoHandler()}>
        <img src={logo} alt='' />
      </div>
      <div onClick={this.handleClick} className='item'>
        {!isUser ? <LogoutLinks /> : <LoginLinks />}
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