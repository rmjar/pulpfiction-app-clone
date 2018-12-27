import {PieChart, Pie, Legend, Tooltip} from 'recharts';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid} from 'recharts';
import React, {Component} from 'react';
import './Charts.css';

const data = [
    {
        value: 50,
        name: 'N1'
    }, {
        value: 20,
        name: 'N2'
    }, {
        value: 100,
        name: 'NN'
    }
]

class Charts extends Component {
    constructor(props) {
        super(props);
        const {width, height, radius} = props;
        this.state = {
            width: parseInt(width),
            height: parseInt(height),
            radius: parseInt(radius)
        }
    }

    render() {
        const {width, height, radius} = this.state;
        return (
            <div className="chartsFlex">
                <PieChart width={width} height={height}>
                    <Pie
                        isAnimationActive={false}
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={radius}
                        fill="#ff7500"
                        label/>
                    <Tooltip/>
                </PieChart>

                <BarChart
                    width={width}
                    height={height}
                    data={data}
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="value" fill="#ff7500"/>
                </BarChart>
            </div>
        )

    }
}

export default Charts;