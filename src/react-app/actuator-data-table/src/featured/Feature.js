import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import "./feature.css";

const Feature = ({ types, server }) => {
  const colors = ["green","blue", "orange","red"];
  
  const data = types.map((type, index) => ({
    name: type.split(":")[1],
    value: server[index],
    color: colors[index % colors.length] 
  }));

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">HTTP RESPONSE</h1>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <PieChart width={400} height={400}>
            <Tooltip />
            <Pie
              data={data}
              dataKey="value"
              outerRadius={150}
              label={({ name }) => name}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Feature;
