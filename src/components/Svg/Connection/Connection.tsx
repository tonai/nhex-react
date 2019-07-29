import React, { FC } from 'react';

import { Dir } from '../Dir';

interface Props {
  dir: number
  height: number
  width: number
}

const Connection: FC<Props> = (props) => {
  const { dir, height, width } = props;

  return (
    <Dir dir={dir} key={dir} height={height} width={width}>
      <path
        d={`M${width + width / 4},0 v${3 * width / 8 - 2} A${height / 2 - 3 * width / 8 + 2},${height / 2 - 3 * width / 8 + 2} 0 0,0 ${width - width / 4},${3 * width / 8 - 2} v${-3 * width / 8 + 2}`}
        fill="white"
        stroke="black"
        strokeWidth="4"
      />
      <path
        d={`M${width},${width / 16} l${width / 12},${width / 12} h${- width / 12 + width / 32} v${width / 32} h${- 2 * width / 32} v${- width / 32} h${- width / 12 + width / 32} z`}
        fill="black"
      />
    </Dir>
  );
};

export default Connection;
