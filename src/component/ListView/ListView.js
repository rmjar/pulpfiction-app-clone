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
        const { fullList, header, changeIndexNext, changeIndexPrevious, metadata:{length, currentCard, numberOfCard}} = this.props;
        return (<div className={classnames('ListView')}>
            <div>
                <div>
                    <h1>{header}</h1>
                </div>
                <div>
                    {this.props.render()}
                </div>
                {!fullList && <Button content="Pokaż więcej" />}
                <div className={classnames('ChangeShowingRecords')}>
                    <div>Liczba pozycji: {length}</div>
                    <div><b>{currentCard}/{numberOfCard}</b></div>
                </div>
                <div className={classnames('ChangeShowingRecords')}>
                    {currentCard>1 && <div className={classnames('PrevNextButton')} onClick={()=>changeIndexPrevious()}>Poprzedni</div>}
                    {currentCard<numberOfCard && <div className={classnames('PrevNextButton')} onClick={()=>changeIndexNext()}>Następny</div>}
                </div>
            </div>
        </div>);
    }
}
