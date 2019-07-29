import React, { FC } from 'react';

import { SvgProps } from '../../../types';

interface Props extends SvgProps {
}

const Percing: FC<Props> = (props) => {
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
        d={`M${width + width / 16},0 L${width},${width / 2 - width / 6} ${width - width / 16},0 Z`}
        fill="white"
        style={style}
      />
    </>
  );
};

export default Percing;
