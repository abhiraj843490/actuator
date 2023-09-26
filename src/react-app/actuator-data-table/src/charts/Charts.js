import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell } from "recharts";
import "./chart.css";

const Charts = ({ types, server }) => {
  const colors = ["green", "blue", "orange", "red"];

  const data = types.map((type, index) => ({
    name: type.split(":")[1],
    
    value: server[index],
    color: colors[index % colors.length],
  }));
  
  return (
    <div className="chart">
      <div className="top">
        <h1 className="title">HTTP RESPONSE</h1>
      </div>
      <div className="bottom">
        <BarChart width={400} height={400} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default Charts;