
import React, { Component } from 'react';
import TrainingChart from './TrainingChart';
import DietChart from './DietChart';
import './Charts.css';
import dietProducts from '../../dataStatic/dietProducts.js';


const data = dietProducts.reduce((acc, item) => {

    if (!acc[item.usersID]) {
        acc[item.usersID] = item.products.reduce((innerAcc, product) => innerAcc + parseInt(product.calories, 10), 0)
    } else {
        acc[item.usersID] += item.products.reduce((innerAcc, product) => innerAcc + parseInt(product.calories, 10), 0);
    }
    return acc;
}, {});

const dataArr = Object.entries(data).map(item => ({ name: item[0], value: item[1]}));


class Charts extends Component {
    constructor(props) {
        super(props);
        const { width, height, radius } = props;
        this.state = {
            width: parseInt(width),
            height: parseInt(height),
            radius: parseInt(radius)
        }
    }

    render() {
        const { width, height, radius } = this.state;
        return (
            <div className="chartsFlex">

                <TrainingChart width={width} height={height} radius={radius} data={dataArr}> </TrainingChart>

                <DietChart width={width} height={height} radius={radius} data={dataArr}> </DietChart>
            </div>
        )

    }
}

export default Charts;