import React, { Component } from "react"
import "./Exercises.css"
import classnames from "classnames"

export default class Exercises extends Component {

    componentDidMount() {
        fetch('https://pulp-fitness.firebaseio.com/exercises.json', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ exercises: data });
            });
    }

    findById = ({ uuid }) => {
        const { match: { params: { exerciseId } } } = this.props;
        return uuid === exerciseId || exerciseId === undefined
    }

    render() {
        console.log(this.props)
        const { match: { params: { exerciseId } } } = this.props;
        if (this.state !== null) {
            const { exercises } = this.state;
            const exercise = exercises.find(x => x.uuid === exerciseId);
            return <div className={classnames('ContainerExercise')}>
                <div className={classnames('MainPanel')}>
                    <img src={exercise.imagesOrVideos[0].url} width="400px" alt="Exercise"></img>
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