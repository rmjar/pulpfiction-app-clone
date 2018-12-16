import React, { Component } from 'react';
import classnames from "classnames";
import "./ListItem.css"

export default class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item } = this.props;
        return (
            <div className={classnames('ListItem')}>{item.name}</div>
        );
    }
}