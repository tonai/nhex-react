import React, { FC } from 'react';

import { SQRT3 } from '../../../constants';

interface Props {
  color?: string
  width: number
}

const Hex: FC<Props> = (props) => {
  const { color = 'white', width } = props;
  const w = width * 2;
  const h = SQRT3 * width;

  return (
    <path 
      d={`M${w / 4},0 L${3 * w / 4},0 ${w},${h / 2} ${3 * w / 4},${h} ${w / 4},${h} 0,${h / 2} Z`}
      fill={color}
    />
  );
};

export default Hex;
