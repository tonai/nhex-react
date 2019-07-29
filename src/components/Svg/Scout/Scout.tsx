import React, { FC } from 'react';

import { ModuleProps } from '../../../types';

interface Props extends ModuleProps {
}

const Scout: FC<Props> = (props) => {
  const { width } = props;

  return (
    <text
      alignmentBaseline="central"
      fill="black"
      fontSize={2 * width / 3}
      fontWeight="bold"
      textAnchor="middle"
      x={0}
      y={-1}
    >+1</text>
  );
};

export default Scout;
