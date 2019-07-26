import React, { FC } from 'react';

import { Hex } from '../Hex';

interface Props {
  empty?: boolean
  margin?: number
  width: number
}

const Cell: FC<Props> = (props) => {
  const { children, empty = false, margin = 0, width } = props;

  if (empty) {
    return (<Hex  width={width}/>);
  }

  return (
    <Hex color={'black'} width={width}>
      {children ? children : <Hex width={width - margin}/>}
    </Hex>
  );
};

export default Cell;
