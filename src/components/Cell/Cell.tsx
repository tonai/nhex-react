import React, { FC } from 'react';

import { Hex } from '../Hex';

interface Props {
  empty?: boolean
  width: number
}

const Cell: FC<Props> = (props) => {
  const { empty = false, width } = props;

  if (empty) {
    return (<Hex  width={width}/>);
  }

  return (
    <Hex color={'black'} width={width}>
      <Hex width={width - 10}/>
    </Hex>
  );
};

export default Cell;
