import React, { FC, useContext } from 'react';

import { Hex, dropContext } from '../';

interface Props {
  width: number
}

const Cell: FC<Props> = (props) => {
  const { width } = props;
  const isHover = useContext(dropContext);

  return (
    <Hex color={isHover ? 'red' : 'black'} width={width}/>
  );
};

export default Cell;
