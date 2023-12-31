import React, { ReactNode, SVGProps } from 'react';

interface GroupProps {
  className?: string;
  children?: ReactNode;
}

export const Group = React.forwardRef((props: GroupProps, ref: any) => {
  const { children, className } = props;

  return (
    <g 
      className={className}
      ref={ref}
    >
      {children}
    </g>
  )
})