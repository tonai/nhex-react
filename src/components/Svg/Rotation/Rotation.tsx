import React, { FC } from 'react';

import { SQRT3 } from '../../../constants';
import { getCirclePoint } from '../../../services';
import { IconProps } from '../../../types';

interface Props extends IconProps {
}

const Rotation: FC<Props> = (props) => {
  const { color = 'white', width } = props;
  const a1 = 6 * Math.PI / 4;
  const a2 = - Math.PI / 4;
  const r1 = 10;
  const r2 = 8;
  const l = 8;

  return (
    <svg viewBox="0 0 24 24" width={width}>
      <path
        d={`M${getCirclePoint(r1, a2)} A${r1},${r1} 0 1,0 ${getCirclePoint(r1, a1)} h${r1 - r2} A${r2},${r2} 0 1,1 ${getCirclePoint(r2, a2)} Z`}
        fill={color}
        style={{ transform: `translateX(12px) translateY(12px)` }}
      />
      <path
        d={`M6,24 l${-l / 2},${-l * SQRT3 / 2} h${l} Z`}
        fill={color}
        style={{ transform: `translateY(-0.5px)` }}
      />
    </svg>
  );
};

export default Rotation;
