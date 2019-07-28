import React, { FC } from 'react';

import { SvgProps } from '../../../types';

interface Props extends SvgProps {
}

const Range: FC<Props> = (props) => {
  const { style, width } = props;

  return (
    <>
      <path 
        d={`M${width + width / 8},0 L${width},${width / 2} ${width - width / 8},0 Z`}
        fill="black"
        style={style}
      />
      <path 
        d={`M${width + width / 8 - 2},0 L${width},${width / 2 - 4} ${width - width / 8 + 2},0`}
        stroke="white"
        strokeWidth="1"
        style={style}
      />
      <path 
        d={`M${width + width / 16},0 A${width / 16},${width / 16} 0 0,1 ${width - width / 16},0 Z`}
        fill="white"
        style={style}
      />
    </>
  );
};

export default Range;
