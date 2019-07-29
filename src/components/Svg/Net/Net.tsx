import React, { FC } from 'react';
import { getArray } from '../../../services';

import { Clips, SvgProps } from '../../../types';

interface Props extends SvgProps {
}

const Net: FC<Props> = (props) => {
  const { style, width } = props;
  const w = width / 2;
  const lines = 10;

  const d1 = getArray(lines).map((_: unknown, i: number) =>
    `M${w + w / lines * i},${w / lines * i} L${3 * w + w / lines * i},${- width + w / lines * i}`
  ).join(' ');
  const d2 = getArray(lines).map((_: unknown, i: number) =>
    `M${3 * w - w / lines * i},${w / lines * i} L${w - w / lines * i},${- width + w / lines * i}`
  ).join(' ');

  const d3 = getArray(lines).map((_: unknown, i: number) =>
    `M${w + w / lines * i + 1},${w / lines * i - 1} L${3 * w + w / lines * i - 1},${- width + w / lines * i + 1}`
  ).join(' ');
  const d4 = getArray(lines).map((_: unknown, i: number) =>
    `M${3 * w - w / lines * i - 1},${w / lines * i - 1} L${w - w / lines * i + 1},${- width + w / lines * i + 1}`
  ).join(' ');

  return (
    <>
      <path
        clipPath={`url(#${Clips.Hex})`}
        d={`${d1} ${d2}`}
        fill="transparent"
        stroke="white"
        strokeWidth="4"
        style={style}
      />
      <path
        clipPath={`url(#${Clips.Hex})`}
        d={`${d3} ${d4}`}
        fill="transparent"
        stroke="black"
        strokeWidth="2"
        style={style}
      />
    </>
  );
};

export default Net;
