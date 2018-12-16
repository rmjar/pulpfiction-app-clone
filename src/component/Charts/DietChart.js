
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Legend, Tooltip } from 'recharts';
import React, { Component } from 'react';


class DietChart extends Component {


    render() {

        const {width, height, data} = this.props;
        return <BarChart
            width={width}
            height={height}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }
            }>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#ff7500" />
        </BarChart >
    }
}

export default DietChart;