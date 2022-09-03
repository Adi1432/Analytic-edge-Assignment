import React from "react";

import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Legend,
} from "recharts";
const Graph = ({ data }) => {
  return (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="dt_txt" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="main.temp_max" stroke="#8884d8" />
      <Line type="monotone" dataKey="main.temp_min" stroke="#82ca9d" />
      <Line type="monotone" dataKey="weather[0].description" stroke="red" />
    </LineChart>
  );
};

export default Graph;
