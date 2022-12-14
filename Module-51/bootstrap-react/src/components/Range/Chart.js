import React from 'react';
import { BarChart, Legend,Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const Chart = () => {
    const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];
    return (

        <div>
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Chart;