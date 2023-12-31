import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { createDrag } from '../../utils/drag';

export type ForceNode = {
  "id": string,
  "group": number
}

export type ForceLink = {
  "source": string,
  "target": string
}

export type ForceOptions = {
  drag?: boolean,
  label?: boolean
}

export interface ForceGraphProps {
  nodes: ForceNode[],
  links: ForceLink[],
  width?: number,
  height?: number,
  options?: ForceOptions, 
  styles?: Record<string, string | number>
}

const defaultStyles = {
  node: {
    radius: 5,
    fill: "blue"
  },
  link: {
    stroke: "#999",
    strokeOpacity: 0.6
  }
}


export const ForceGraph = ({ nodes, links, options = {}, styles = {}, width = 800, height = 600}: ForceGraphProps) => {
  const customStyles =  {...defaultStyles, ...styles};
  const { node: nodeStyles, link: linkStyles } = customStyles;
  const svgRef = useRef();
  useEffect(() => {
    // create simulation
    // Data for nodes and links

    const svg = d3.select(svgRef.current);
    const { drag: isDraggable = false, label: showLabels = false } = options;
    svg.selectAll("*").remove(); // Clear SVG contents before redrawing
  
    // Initialize the simulation
    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2));
    //const drag = createDrag(simulation);
    // Create the links
    const link = svg.append("g")
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke", linkStyles.stroke)
        .attr("stroke-opacity", linkStyles.strokeOpacity);
  
    // Create the nodes
   
    const node = svg.append("g")
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("r", nodeStyles.radius)
        .attr("fill", nodeStyles.fill)
    console.log('it be draggable',isDraggable)
    
    if (isDraggable) {
      const drag = createDrag(simulation);
      node.call(drag)
    }
    let labels;
    if(showLabels) {
      labels = svg.append("g")
      .attr("class", "labels")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .text(d => d.id) // Assuming each node has an 'id' property for the label
      .attr("x", 8)
      .attr("y", ".31em");
    }
    // if (isDraggable) {
    //   const drag = createDrag(simulation);
    //   node.call(drag)
    // }

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);
  
      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

      if (showLabels && labels) {
        // Update label positions only if showLabels is true
        labels
          .attr("x", d => d.x + 5) // Adjust label positions
          .attr("y", d => d.y);
        }
    });

    
  }, [nodes, links]);


  return (
    <svg ref={svgRef} width={width} height={height} />
  );
};

