import React, { FC } from 'react';

import { Clips, SvgProps } from '../../../types';

interface Props extends SvgProps {
}

const Armor: FC<Props> = (props) => {
  const { next, prev, style, width } = props;
  const h = 7 * width / 4;

  return (
    <>
      <path 
        clipPath={getClipPath()}
        d={`M${- width},${- h} A${width * 2},${width * 2} 0 0,0 ${width * 3},${- h} Z`}
        fill="black"
        style={style}
      />
      <path 
        clipPath={getClipPath()}
        d={`M${- width + 4},${- h} A${width * 2 - 8},${width * 2 - 8} 0 0,0 ${width * 3 - 4},${- h} Z`}
        stroke="white"
        strokeWidth="6"
        style={style}
      />
    </>
  );

  function getClipPath() {
    if (next && prev) {
      return `url(#${Clips.Quarter})`;
    }
    if (next) {
      return `url(#${Clips.QuarterNext})`;
    }
    if (prev) {
      return `url(#${Clips.QuarterPrev})`;
    }
    return `url(#${Clips.Hex})`;
  }
};

export default Armor;
