import React, { Component } from 'react';
import { Link } from "react-router-dom";
import classnames from "classnames";
import "./ListItem.css"

import FavStar from "../FavStar";

export default class ListItem extends Component {

    render() {
        const { item, exercise, index, category } = this.props;
        return (
            <div className={classnames('ListItem')}>
                <Link to={!exercise ? "/trainings/" + item.uuid : "/exercises/" + item.uuid}>{item.name}</Link>
                <FavStar category={category} id={index} />
            </div>
        );
    }
}