import React, { ComponentType, FC } from 'react';

import { SQRT3 } from '../../../constants';
import { ModuleProps, SvgProps } from '../../../types';

interface Props extends SvgProps {
  Icon?: ComponentType<ModuleProps>
}

const Module: FC<Props> = (props) => {
  const { Icon, style, width } = props;
  const height = SQRT3 * width;
  const cx = width;
  const cy = height / 2;

  return (
    <>
      <circle
        cx={cx}
        cy={cy}
        r={width / 2 - 2}
        fill="white"
        stroke="black"
        strokeWidth="4"
        style={style}
      />
      {Icon && (
        <g style={{ transform: `translateX(${cx}px) translateY(${cy}px)` }}>
          <Icon width={width}/>
        </g>
      )}
    </>
  );
};

export default Module;
