import React, { FC } from 'react';

import { createCirclePath } from '../../../services';
import { IconProps } from '../../../types';

interface Props extends IconProps {
}

const Terror: FC<Props> = (props) => {
  const { color = 'white', width } = props;
  const circle = createCirclePath(12, 12);
  const l = 1.5;

  return (
    <svg viewBox="0 0 24 24" width={width}>
      <path
        d={`M6,12 C9,7.5 15,7.5 18,12 C15,16.5 9,16.5 6,12 ${circle(2)} Z`}
        fill={color}
        fillRule="evenodd"
      />
      <path
        d={getRect(7)}
        fill={color}
      />
      <path
        d={getRect(7)}
        fill={color}
        style={{ transform: 'rotateZ(180deg)', transformOrigin: '12px 12px' }}
      />
      <path
        d={getRect(4)}
        fill={color}
        style={{ transform: 'rotateZ(90deg)', transformOrigin: '12px 12px' }}
      />
      <path
        d={getRect(4)}
        fill={color}
        style={{ transform: 'rotateZ(270deg)', transformOrigin: '12px 12px' }}
      />
      <path
        d={getRect(6)}
        fill={color}
        style={{ transform: 'rotateZ(45deg)', transformOrigin: '12px 12px' }}
      />
      <path
        d={getRect(6)}
        fill={color}
        style={{ transform: 'rotateZ(225deg)', transformOrigin: '12px 12px' }}
      />
      <path
        d={getRect(6)}
        fill={color}
        style={{ transform: 'rotateZ(135deg)', transformOrigin: '12px 12px' }}
      />
      <path
        d={getRect(6)}
        fill={color}
        style={{ transform: 'rotateZ(315deg)', transformOrigin: '12px 12px' }}
      />
    </svg>
  );

  function getRect(L: number) {
    return `M${12 + l / 2},1 v${L} h${-l} v-${L} Z`
  }
};

export default Terror;
