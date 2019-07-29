import React, { FC } from 'react';

import { ModuleProps } from '../../../types';

interface Props extends ModuleProps {
}

const Saboteur: FC<Props> = (props) => {
  const { color = 'black', cx, cy, width } = props;

  return (
    <text
      alignmentBaseline="central"
      fill={color}
      fontSize={2 * width / 3}
      fontWeight="bold"
      textAnchor="middle"
      x={cx}
      y={cy - 1}
    >-1</text>
  );
};

export default Saboteur;
