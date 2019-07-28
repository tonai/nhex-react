import React, { FC } from 'react';
import { BoardTile } from 'nhex-redux';

import { Armor, Hex, Group, Melee, Range } from '../Svg';

interface Props {
  margin?: number
  rotation?: number
  tile: BoardTile
  width: number
}

const Tile: FC<Props> = (props) => {
  const { margin = 10, rotation = 0, tile, width } = props;
  const { armor, color, melee, range } = tile;
  const w = width * 2 - margin * 2;
  const h = Math.sqrt(3) * width;
  const rootStyles = {
    transform: `rotateZ(${rotation * Math.PI / 3}rad) translateX(${margin}px)`,
    transformOrigin: `${width}px ${h / 2}px`
  };

  return (
    <g style={rootStyles}>
      <Hex base color={color} width={w / 2}>
        <Group Component={Armor} data={armor} width={w / 2}/>
        <Group Component={Melee} data={melee} width={w / 2}/>
        <Group Component={Range} data={range} width={w / 2}/>
      </Hex>
    </g>
  );
};

export default Tile;
