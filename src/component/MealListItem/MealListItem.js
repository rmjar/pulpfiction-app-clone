import React, {Component} from "react"
import classnames from "classnames"
import "./MealListItem.css"

export default class MealListItem extends Component{
    render(){
        return<div>
            <div className={classnames('MealListItem')}>Posiłek</div>
        </div>
    }
}