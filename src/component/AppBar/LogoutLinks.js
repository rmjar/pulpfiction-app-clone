import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../actions/authActions';
import classNames from 'classnames';


const LogoutLinks = (props) => {
    return <ul>
        <li><a onClick={props.signIn} className={classNames("button", "buttonBorder", "buttonMedium", "buttonRounded")}>Log In</a></li>
    </ul>
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: () => dispatch(signIn())
    }
}

export default connect(null, mapDispatchToProps)(LogoutLinks);