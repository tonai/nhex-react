import React, { FC } from 'react';

import { SQRT3 } from '../../../constants';

interface Props {
  base?: boolean
  color?: string
  width: number
}

const Hex: FC<Props> = (props) => {
  const { base, children, color = 'white', width } = props;
  const w = width * 2;
  const h = SQRT3 * width;

  const hex = (
    <path 
      d={`M${w / 4},0 L${3 * w / 4},0 ${w},${h / 2} ${3 * w / 4},${h} ${w / 4},${h} 0,${h / 2} Z`}
      fill={color}
    />
  );

  if (!base) {
    return hex;
  }

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w}>
      {hex}
      {children}
    </svg>
  );
};

export default Hex;
