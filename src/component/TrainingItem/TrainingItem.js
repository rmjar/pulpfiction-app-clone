import React, {Component} from 'react';
import classnames from "classnames";
import "./TrainingItem.css";

export default class TrainingItem extends Component{

    render(){
        const {training:{timeOfTraining, name}, onClickItemHandler} = this.props;
        return <div onClick={()=>onClickItemHandler()} className={classnames('TrainingItem')}>
            <div className={classnames('TrainingItemName')}>{name}</div>
            <div className={classnames('TrainingItemTime')}><p><b>Czas trwania treningu:</b></p><p>{timeOfTraining}</p></div>
        </div>
    }
}