import React, { ComponentType, FC } from 'react';

import { SQRT3 } from '../../../constants';
import { IconProps, SvgProps } from '../../../types';

interface Props extends SvgProps {
  Icon?: ComponentType<IconProps>
  color?: string
  iconProps?: Partial<SvgProps>
  position?: number
  text?: string | number
}

const Circle: FC<Props> = (props) => {
  const { Icon, color = 'white', iconProps, position, style, text, width } = props;
  const height = SQRT3 * width;
  const cx = getCx();
  const cy = getCy();

  return (
    <>
      <circle
        cx={cx}
        cy={cy}
        fill="black"
        r={width / 6}
        style={style}
      />
      <circle
        cx={cx}
        cy={cy}
        r={width / 6 - 2}
        stroke={color}
        strokeWidth="2"
        style={style}
      />
      {text && (
        <text
          alignmentBaseline="central"
          fill="white"
          fontSize={width / 4}
          fontWeight="bold"
          textAnchor="middle"
          x={cx}
          y={cy - 1}
        >{text}</text>
      )}
      {Icon && (
        <g style={{ transform: `translateX(${cx - width / 10}px) translateY(${cy - height / 2}px)` }}>
          <Icon color={color} width={width / 5} {...iconProps}/>
        </g>
      )}
    </>
  );

  function getCx() {
    if (position === 0 || position === 4) {
      return width / 2 + width / 8;
    } else if (position === 1 || position === 3) {
      return 3 * width / 2 - width / 8;
    } else if (position === 5) {
      return width / 4;
    }
    return 2 * width - width / 4;
  }

  function getCy() {
    if (position === 0 || position === 1) {
      return height / 8;
    } else if (position === 3 || position === 4) {
      return height - height / 8;
    }
    return height / 2;
  }
};

export default Circle;
