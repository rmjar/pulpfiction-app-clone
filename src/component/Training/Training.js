import React, {Component} from 'react';
import "./Training.css"

export default class Training extends Component{
    constructor(){
        super()
    }

    componentDidMount() {
        const {match:{params:{uuid}}} = this.props;
        fetch('https://pulp-fitness.firebaseio.com/trainings.json?orderBy=%22uuid%22&&equalTo=%22'+uuid+'%22', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ training: data });
            });
    }

    render(){
        return <></>
    }
}