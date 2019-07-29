import React, { FC } from 'react';

import { IconProps } from '../../../types';

interface Props extends IconProps {
}

const Move: FC<Props> = (props) => {
  const { color = 'white', style, width } = props;

  return (
    <svg viewBox="0 0 24 24" width={width}>
      <path
        d="M10,9 V5 l-7,7 7,7 v-4.1 c5,0 8.5,1.6 11,5.1 -1,-5 -4,-10 -11,-11 Z"
        fill={color}
        style={style}
      />
    </svg>
  );
};

export default Move;
