import React, { Component } from "react";
import "./Trainings.css"
import classnames from "classnames"
import ListView from "../ListView/ListView";
import TrainingItem from "../TrainingItem/TrainingItem";
//import trainings from "./../../data/trainings"

const NUMBER_OF_ROW = 10;


export default class Trainings extends Component {

    constructor(){
        super();

        this.state={
            trainings: [],
            indexOfCurrentRecords:0,
        }
    }
    componentDidMount() {
        fetch('https://pulp-fitness.firebaseio.com/trainings.json', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ trainings: data });
            });
    }

    changeIndexNext = () =>{
        this.setState((state)=>({
             indexOfCurrentRecords: state.indexOfCurrentRecords+10
        }))
    }

    changeIndexPrevious = () => {
        this.setState((state) => ({
            indexOfCurrentRecords: state.indexOfCurrentRecords - 10
        }))

    }

    createMetaDataObject = ()=>{
        const { trainings, indexOfCurrentRecords } = this.state;

        return {
        length: trainings.length,
        numberOfCard: Math.ceil(trainings.length/10),
        currentCard: indexOfCurrentRecords/10+1,
        }
        
    }
    onClickItemHandler = (uuid)=>{
        this.props.history.push('training/'+uuid);
    }

    render() {
            const { trainings, indexOfCurrentRecords } = this.state;
            const metadata = this.createMetaDataObject();
            return <div className={classnames('Container')}>
            <div className={classnames('AddTrainingSection')}>
                <div className={classnames('AddTraining')} >Dodaj + </div>
            </div>
                <ListView fullList={true} header="Lista treningów" list={trainings} changeIndexPrevious={this.changeIndexPrevious}
                    changeIndexNext={this.changeIndexNext} metadata={metadata} 
                render={() => trainings.filter((elem, index)=>index>=indexOfCurrentRecords && index<(indexOfCurrentRecords+10) ).
                    map((elem => <TrainingItem training={elem} onClickItemHandler={()=>this.onClickItemHandler(elem.uuid)}></TrainingItem>))}></ListView>

            </div>
    }
}