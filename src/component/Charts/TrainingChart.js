import {PieChart, Pie, Legend, Tooltip} from 'recharts';
import React, { Component } from 'react';





class TrainingChart extends Component {
    render() {
        const {width, height, data, radius} = this.props;
        return <PieChart width={width} height={height}>
            <Pie
                isAnimationActive={false}
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={radius}
                fill="#ff7500"
                label />
            <Tooltip />
        </PieChart>
    }
}

export default TrainingChart;