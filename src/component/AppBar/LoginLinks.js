import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { signOut } from '../../actions/authActions';
import { auth } from '../../config/fbConfig';

const LoginLinks = (props) => {
    const { displayName } = auth.currentUser;

    const initials =
        displayName
            .split(" ")
            .reduce((acc, word) => acc + word.charAt(0), '')
            .toUpperCase();

    const { signOut } = props;
    return <span>
        <ul className="right">
            <li><a onClick={signOut} className={classNames("button", "buttonBorder", "buttonMedium", "buttonRounded")}>Log Out</a></li>
            <li><NavLink to="/" className={classNames("button", "buttonBorder", "buttonMedium", "buttonRounded", "buttonDarken")}>{initials}</NavLink></li>
        </ul>
    </span >
}


const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(LoginLinks);