import React, { Component } from "react";
import { Link , BrowserRouter as Router, Route
} from "react-router-dom";
import classnames from "classnames";
import "./Button.css"

export default class Button extends Component {

    render() {
        const { content } = this.props;
        return <><Router>
            <Link to="/trenings" className={classnames('button', 'buttonBorder', 'buttonMedium','link')}>{content}</Link>
        </Router></>
    }
}