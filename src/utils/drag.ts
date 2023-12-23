import * as d3 from 'd3';

export function createDrag(simulation) {
  function dragStarted(event, d) {
    console.log(event,d)
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
  }

  function dragged(event, d) {
    console.log(event,d)
      d.fx = event.x;
      d.fy = event.y;
  }

  function dragEnded(event, d) {
    console.log(event,d)  
    if (!event.active) simulation.alphaTarget(0);
      
      d.fx = null;
      d.fy = null;
  }
  const drag = d3.drag()
  .on("start", dragStarted)
  .on("drag", dragged)
  .on("end", dragEnded);
  return drag;
}

