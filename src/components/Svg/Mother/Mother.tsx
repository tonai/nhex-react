import React, { FC } from 'react';

import { getStarPath } from '../../../services';
import { ModuleProps } from '../../../types';

interface Props extends ModuleProps {
}

const Mother: FC<Props> = (props) => {
  const { color = 'black', cx, cy, width } = props;
  const radius = width / 5;
  const innerRadius = radius / ((Math.tan(Math.PI * 0.4) + Math.tan(Math.PI * 0.3)) * Math.sin(Math.PI * 0.2));
  const d = `${getStarPath(radius, innerRadius, 5)} Z`;

  return (
    <>
      <path
        d={d}
        fill={color}
        style={{ transform: `translateX(${cx}px) translateY(${cy - radius}px) rotateZ(180deg)` }}
      />
      <path
        d={d}
        fill={color}
        style={{ transform: `translateX(${cx}px) translateY(${cy + radius}px) rotateZ(180deg)` }}
      />
    </>
  );
};

export default Mother;
