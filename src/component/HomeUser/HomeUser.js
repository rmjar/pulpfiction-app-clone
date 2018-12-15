import React, { Component } from "react";
import Charts from './../Charts';
import AppBar from './../AppBar';
import Sidebar from './../Sidebar';
import ListView from './../ListView/ListView';


export default class HomeUser extends Component {

    render() {
        return (<>
            <Sidebar />
            <Charts width="480" height="400" radius="180" />
            <ListView />
        </>)
    }

}