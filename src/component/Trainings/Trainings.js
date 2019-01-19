import React, { Component } from "react";
import "./Trainings.css"
import classnames from "classnames"
import ListView from "../ListView/ListView";
//import trainings from "./../../data/trainings"


export default class Training extends Component {
    componentDidMount() {
        fetch('https://pulp-fitness.firebaseio.com/trainings.json', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ trainings: data });
            });
    }

    filterById = ({ uuid }) => {
        const { match: { params: { trainingId } } } = this.props;
        return uuid === trainingId || trainingId === undefined;
    }

    render() {
        if (this.state !== null) {
            const { trainings } = this.state;
            const { match: { params: { trainingId } } } = this.props;
            return <div className={classnames('Container')}>
                <ListView fullList={true} header="Lista treningów" list={trainings} type="training"></ListView>
                {trainingId &&
                    <ListView fullList={true} header="Nazwa treningu" list={trainings.find(this.filterById).trainingDefinition}
                        type="exercise" exercise={true}></ListView>}
            </div>
        }
        return null;
    }
}