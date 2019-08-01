import React, { FC } from 'react';

import { getStarPath } from '../../../services';
import { IconProps } from '../../../types';

interface Props extends IconProps {
}

const Battle: FC<Props> = (props) => {
  const { color = 'white', width } = props;
  const d = `${getStarPath(11, 6, 19)} ${getStarPath(4, 2, 9)} Z`;

  return (
    <svg viewBox="0 0 24 24" width={width}>
      <path
        d={d}
        fill={color}
        fillRule="evenodd"
        style={{ transform: 'translateX(12px) translateY(12px)' }}
      />
    </svg>
  );
};

export default Battle;
