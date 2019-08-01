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
        d={`M${width + width / 8 - 3},0 L${width},${width / 2 - 9} ${width - width / 8 + 3},0`}
        stroke="white"
        strokeLinejoin="miter"
        strokeWidth="2"
        style={style}
      />
      <path 
        d={`M${width + width / 20},0 A${width / 20},${width / 20} 0 0,1 ${width - width / 20},0 Z`}
        fill="white"
        style={style}
      />
    </>
  );
};

export default Range;
