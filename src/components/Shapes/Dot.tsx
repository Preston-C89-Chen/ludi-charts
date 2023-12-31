import React, { FC } from 'react';

interface DotProps {
  className?: string;
  cx?: number;
  cy?: number;
  r?: number;
  clipDot?: boolean;
}

export const Dot: FC<DotProps> = (props) => {
    const { cx, cy, r, className } = props;
    if (cx === +cx && cy === +cy && r === + r) {
      return (
        <circle
          className={className}
          cx={cx}
          cy={cy}
          r={r}
        />
      )
    }
    return null;
}