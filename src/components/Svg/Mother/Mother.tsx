import React, { FC } from 'react';

import { ModuleProps } from '../../../types';

interface Props extends ModuleProps {
}

const Mother: FC<Props> = (props) => {
  const { color = 'black', cx, cy, width } = props;
  const radius = width / 5;
  const innerRadius = radius / ((Math.tan(Math.PI * 0.4) + Math.tan(Math.PI * 0.3)) * Math.sin(Math.PI * 0.2));
  const d = `M${getOuterPoint(0)} L${getInnerPoint(0)} ${getOuterPoint(1)} ${getInnerPoint(1)} ${getOuterPoint(2)} ${getInnerPoint(2)} ${getOuterPoint(3)} ${getInnerPoint(3)} ${getOuterPoint(4)} ${getInnerPoint(4)} Z`;

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

  function getInnerPoint(index: number) {
    const angle = 2 * Math.PI / 10 + 2 * Math.PI / 5 * index;
    const x = innerRadius * Math.sin(angle);
    const y = innerRadius * Math.cos(angle);
    return `${x},${y}`;
  }

  function getOuterPoint(index: number) {
    const angle = 2 * Math.PI / 5 * index;
    const x = radius * Math.sin(angle);
    const y = radius * Math.cos(angle);
    return `${x},${y}`;
  }
};

export default Mother;
