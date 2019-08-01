import React, { FC } from 'react';

import { createCirclePath } from '../../../services';
import { FoundationProps } from '../../../types';

interface Props extends FoundationProps {
}

const Mine: FC<Props> = (props) => {
  const { cx, cy, width } = props;
  const circle = createCirclePath(cx, cy);

  const r1 = 18 * width / 30;
  const r2 = 16 * width / 30;

  const r3 = 13 * width / 30;
  const r4 = 11 * width / 30;

  const r5 = 8 * width / 30;
  const r6 = 4 * width / 30;

  return (
    <>
      <path
        d={`${circle(r1)} ${circle(r2)} ${circle(r3)} ${circle(r4)} ${circle(r5)} ${circle(r6)} z`}
        fill="white"
        fillRule="evenodd"
      />
      <circle
        cx={cx}
        cy={cy}
        r={r2 - 2}
        fill="transparent"
        stroke="black"
        strokeWidth={2}
      />
      <circle
        cx={cx}
        cy={cy}
        r={r4 - 2}
        fill="transparent"
        stroke="black"
        strokeWidth={2}
      />
      <circle
        cx={cx}
        cy={cy}
        r={r6 - 2}
        fill="transparent"
        stroke="black"
        strokeWidth={2}
      />
    </>
  );
};

export default Mine;
