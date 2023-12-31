import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import world from './data/world.json';

export const World = () => {
  const svgRef = useRef();
  const width = 1230;
  const height = 620;
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
  
    const projection = d3.geoEqualEarth();
    const geoPathGenerator = d3.geoPath().projection(projection);
  
    svg
    .selectAll(".country-path") 
    .data(world.features) 
    .join("path") 
    .attr("class", "country-path")
    .attr("d", geoPathGenerator)
    .attr("fill", "#f8fcff")
    .attr("stroke", "#09131b")
    .attr("stroke-opacity", 0.4);
  },[])


  return (
    <svg ref={svgRef} width={width} height={height} />
  )
};