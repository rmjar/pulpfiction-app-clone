import React,{Component} from 'react';
import ListItem from './../ListItem';
import classnames from "classnames"
import "./ListView.css"

const list = [{ name: "Nazwa1" },
{ name: "Nazwa2" },
{ name: "Nazwa3" },
{ name: "Nazwa4" },
{ name: "Nazwa5" },
]

export default class ListView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        //Docelowo stąd dane i liczba elementów listy
        //const {items} = this.props;
        return(<div className={classnames('ListView')}>
            {list.map((elem) => <ListItem item={elem}/>)}
        </div>);
    }
}