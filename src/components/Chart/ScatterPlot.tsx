import React, { useEffect, useRef} from 'react';
import * as d3 from 'd3';
import { Group } from '../Container/Group';
import { Layout } from '../Container/Layout';

const ScatterPlot = ({axis, data, ...options}) => {
  const groupRef = useRef();

  useEffect(() => {
    if (groupRef.current) {

      const svg = d3.select(groupRef.current);
      const xScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.x))
        .range([0, options.width]);

      const yScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.y))
        .range([options.height, 0]);
      if (axis) {
        svg.append('g').call(d3.axisBottom(xScale));
        svg.append('g').call(d3.axisLeft(yScale));
      }

      svg.selectAll(".dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "dot")
        .attr("cx", d => xScale(d.x))
        .attr("cy", d => yScale(d.y))
        .attr("r", 5);
    }

  }, [data, axis])

  return (
    <Layout>
      <Group ref={groupRef} />
    </Layout>
  )
}

export default ScatterPlot;