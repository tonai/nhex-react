import React, { FC } from 'react';

import { ModuleProps } from '../../../types';

interface Props extends ModuleProps {
}

const Officer: FC<Props> = (props) => {
  const { color = 'black', cx, cy, width } = props;

  return (
    <>
      <text
        alignmentBaseline="central"
        fill={color}
        fontSize={2 * width / 3}
        fontWeight="bold"
        textAnchor="middle"
        x={cx}
        y={cy - 1}
      >+&nbsp;&nbsp;</text>
      <path
        d={`M${cx + 3 * width / 10},${cy - width / 5} l${- width / 8},${width / 2} ${- width / 8},${- width / 2} Z`}
        fill="black"
      />
    </>
  );
};

export default Officer;
