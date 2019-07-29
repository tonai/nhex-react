import React, { FC } from 'react';

import { IconProps } from '../../../types';

interface Props extends IconProps {
}

const FlashBack: FC<Props> = (props) => {
  const { color = 'white', style, width } = props;

  return (
    <svg viewBox="0 0 24 24" width={width}>
      <path
        d="M23,5.5 V20 c0,2.2 -1.8,4 -4,4 h-7.3 c-1.08,0 -2.1,-.43 -2.85,-1.19 L1,14.83 s1.26,-1.23 1.3,-1.25 c.22,-.19 .49,-.29 .79,-.29 .22,0 .42,.06 .6,.16 .04,.01 4.31,2.46 4.31,2.46 V4 c0,-.83 .67,-1.5 1.5,-1.5 S11,3.17 11,4 v7 h1 V1.5 c0,-.83 .67,-1.5 1.5,-1.5 S15,.67 15,1.5 V11 h1 V2.5 c0,-.83 .67,-1.5 1.5,-1.5 s1.5,.67 1.5,1.5 V11 h1 V5.5 c0,-.83 .67,-1.5 1.5,-1.5 s1.5,.67 1.5,1.5 z"
        fill={color}
        style={style}
      />
    </svg>
  );
};

export default FlashBack;
