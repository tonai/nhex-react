import React, { FC } from 'react';

import { createCirclePath } from '../../../services';
import { IconProps } from '../../../types';

interface Props extends IconProps {
}

const Sniper: FC<Props> = (props) => {
  const { color = 'white', width } = props;
  const circle = createCirclePath(12, 12);
  const l = 1;

  return (
    <svg viewBox="0 0 24 24" width={width}>
      <path
        d={`M${12 - l / 2},0 h${l} v${12 - l / 2} h${12 - l / 2} v${l} h${- 12 + l / 2} v${12 - l / 2} h${-l} v${- 12 + l / 2} h${- 12 + l / 2} v${- l} h${12 - l / 2} ${circle(4)} Z`}
        fill={color}
        fillRule="evenodd"
      />
      <circle
        cx={12}
        cy={12}
        fill="transparent"
        r={8}
        stroke="black"
        strokeWidth={l}
      />
    </svg>
  );
};

export default Sniper;
