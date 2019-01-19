import React, { Component } from "react"
import exercises from "./../../data/exercise"
import "./Exercises.css"
import classnames from "classnames"

export default class Exercises extends Component {

    componentDidMount() {
        fetch('https://pulp-fitness.firebaseio.com/trainings.json', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ exercises: data });
            });
    }
    findById = ({ uuid }) => {
        const { match: { params: { exersiceId } } } = this.props;
        return uuid === exersiceId || exersiceId === undefined
    }

    render() {
        const { match: { params: { exerciseId } } } = this.props;
        const { exercises } = this.state
        if (this.state !== null) {
            const exercise = exercises.find(x => x.uuid === exerciseId);
            return <div className={classnames('ContainerExercise')}>
                <div className={classnames('MainPanel')}>
                    <img src={exercise.imagesOrVideos[0].url} width="400px"></img>
                    <h1>{exercise.name}</h1>
                </div>
                <div>
                    <h2>Opis</h2>
                    <div>{exercise.description}</div>
                </div>
            </div>
        }
        return null;
    }
}