import React, { FC } from 'react';

import { Hex } from '../Hex';
import { Clips as Enum } from '../../../types';

interface Props {
  margin: number
  width: number
}

const Clips: FC<Props> = (props) => {
  const { margin, width } = props;

  const w = (width - margin) * 2;
  const h = Math.sqrt(3) * width;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w}>
      <clipPath id={Enum.Hex}>
        <Hex width={w / 2}/>
      </clipPath>
      <clipPath id={Enum.Quarter}>
        <path clipPath={`url(#${Enum.Hex})`} d={`M${w / 4},0 L${3 * w / 4},0 ${w / 2},${h / 2} Z`} />
      </clipPath>
      <clipPath id={Enum.QuarterNext}>
        <path clipPath={`url(#${Enum.Hex})`} d={`M0,0 L${3 * w / 4},0 ${w / 2},${h / 2} Z`} />
      </clipPath>
      <clipPath id={Enum.QuarterPrev}>
        <path clipPath={`url(#${Enum.Hex})`} d={`M${w / 4},0 L${w},0 ${w / 2},${h / 2} Z`} />
      </clipPath>
    </svg>
  );
};

export default Clips;
