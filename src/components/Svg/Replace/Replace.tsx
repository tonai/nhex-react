import React, { FC } from 'react';

import { IconProps } from '../../../types';

interface Props extends IconProps {
}

const Replace: FC<Props> = (props) => {
  const { color = 'white', style, width } = props;

  return (
    <svg viewBox="0 0 24 24" width={width}>
      <path
        d="M6,1.607695154586736 h12 l6,10.392304845413264 -6,10.392304845413264 h-12 l-6,-10.392304845413264 Z"
        fill={color}
        style={style}
      />
      <text
        alignmentBaseline="central"
        fill="black"
        fontSize="22"
        fontWeight="bold"
        textAnchor="middle"
        x="12"
        y="12"
      >?</text>
    </svg>
  );
};

export default Replace;
