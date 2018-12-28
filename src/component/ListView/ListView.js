import React, { Component } from 'react';
import ListItem from './../ListItem';
import classnames from "classnames"
import "./ListView.css"
import Button from '../Button/Button';
import exercises from "./../../data/exercise"
import MealListItem from '../MealListItem/MealListItem';



export default class ListView extends Component {

    render() {
        //Docelowo stąd dane i liczba elementów listy
        //fullList - Czy lista częściowa i zawiera guzik pokaż więcej
        //header - nagłówek listy
        //list - lista elementów listy
        //exercise (boolean) czy ćwiczenie
        //type(exercise,training,meal)
        const { fullList, header, list, exercise, type } = this.props;
        return (<div className={classnames('ListView')}>
            <div>
                <div>
                    <h3>{header}</h3>
                </div>
                <div>
                    {list.map((elem,index) => {
                        if (type === "training")
                            return <ListItem key={elem.uuid} item={elem} exercise={exercise} />
                        else if(type=== "exercise")
                            return <ListItem key={elem.exerciseId+index} 
                            item={exercises.find( x => x.uuid === elem.exerciseId)} exercise={exercise} />
                            else if(type === "meal")
                            {
                                return <MealListItem key={index} item={elem}></MealListItem>
                            }
                        })}
                </div>
                {!fullList && <Button content="Pokaż więcej" />}
            </div>
        </div>);
    }
}