import React, { Component } from "react";
import classnames from "classnames"
import Charts from './../Charts';
import Sidebar from './../Sidebar';
import ListView from './../ListView/ListView';
import trainings from "./../../data/trainings";
import meals from "./../../data/meals";
import "./HomeUsers.css"


export default class HomeUser extends Component {
    render() {
        return <>
            <div className={classnames('HomeListViewsContainer')}>
                <ListView header="Polecane treningi" list={trainings} type="training" />
                <ListView header="Polecane posiłki" list={meals} type="meal"/>
            </div>
        </>
    }

}