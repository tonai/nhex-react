import React, { FC } from 'react';

import { Hex } from '../Svg';

interface Props {
  width: number
}

const Cell: FC<Props> = (props) => {
  const { children, width } = props;

  return (
    <Hex color={'black'} width={width}>
      {children}
    </Hex>
  );
};

export default Cell;
