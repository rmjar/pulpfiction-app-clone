import React, { Component } from 'react';
import {Link} from "react-router-dom";
import classnames from "classnames";
import "./ListItem.css"

export default class ListItem extends Component {

    render() {
        const { item, exercise } = this.props;
        return (
            <div className={classnames('ListItem')}><Link to={!exercise ? "/trainings/"+ item.uuid:"/exercises/"+item.uuid}>{item.name}</Link></div>
        );
    }
}