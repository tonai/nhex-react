import React, { FC } from 'react';

import { Hex } from '../Hex';

interface Props {
  color?: string
  rotation?: number
  width: number
}

const Tile: FC<Props> = (props) => {
  const { color, rotation = 0, width } = props;
  const rootStyles = {
    transform: `rotateZ(${rotation * Math.PI / 3}rad)`
  };

  return (
    <div className="Tile" style={rootStyles}>
      <Hex width={width} color={color} />
    </div>
  );
};

export default Tile;
