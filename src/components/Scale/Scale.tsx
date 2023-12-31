import React from 'react';
import * as d3 from 'd3';

const ScaleComponent = ({ data }) => {
  // Create a linear scale
  const scale = d3.scaleLinear()
    .domain([0, d3.max(data)]) // Input range
    .range([0, 100]);         // Output range

  // Render the scale as a series of divs
  return (
    <div>
      {data.map((value, index) => (
        <div key={index} style={{ width: `${scale(value)}%`, background: 'blue', margin: '2px 0' }}>
          {value}
        </div>
      ))}
    </div>
  );
};

export default ScaleComponent;