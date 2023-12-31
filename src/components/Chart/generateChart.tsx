import React, { Children, Component, ReactNode, useRef } from 'react';
//import { Axis } from '../Axis/Axis';
import { Layout } from '../Container/Layout';

type ChartTypes = 
  | "pie"
  | "scatter"
  | "geographical"
  | "bar"
  | "line";

interface ChartProps {
  chartType: ChartTypes,
  graphComponents?: ReactNode,
  axis?: Axis
}

export const generateChart = ({
  chartType,
  graphComponents,
  axis
}: ChartProps 
) => {
  const containerRef = useRef();
  return (
    <div
      ref={containerRef}
    >
      <Layout>
        { graphComponents }
      </Layout>
    </div>
  );
}