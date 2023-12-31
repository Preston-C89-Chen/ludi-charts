import React, { ReactNode, CSSProperties } from 'react';

interface LayoutProps {
  width: number;
  height: number;
  viewBox?: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  };
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export function Layout(props: Props) {
  const { children, width, height, viewBox, className, style, ...options } = props;
  const svgView = viewBox || { width, height, x: 0, y: 0};
  
  return (
    <svg
      className={className}
      width={width}
      height={height}
      style={style}
      viewBox={`${svgView.x} ${svgView.y} ${svgView.width} ${svgView.height}`}
    >
      { children }
    </svg>
  )
}