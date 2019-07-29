import React, { FC } from 'react';
import { BoardTile } from 'nhex-redux';

import { SQRT3 } from '../../constants';
import { getArray } from '../../services';

import { Armor, Circle, Hex, Group, Melee, Net, Percing, Range, Toughness } from '../Svg';

interface Props {
  color: string,
  margin?: number
  rotation?: number
  tile: BoardTile
  width: number
}

const Tile: FC<Props> = (props) => {
  const { color, margin = 10, rotation = 0, tile, width } = props;
  const { armor, initiative, melee, net, percing, range, toughness, wounds } = tile;
  const w = width - margin;
  const h = SQRT3 * width * 2;

  const initiatives = initiative instanceof Array
    ? initiative
    : [initiative];

  const toughnessArray = getArray(toughness - 1);

  const rootStyles = {
    transform: `rotateZ(${rotation * Math.PI / 3}rad) translateX(${margin}px)`,
    transformOrigin: `${width * 2}px ${h / 2}px`
  };

  return (
    <g style={rootStyles}>
      <Hex base color={color} width={w}>
        <Group Component={Armor} data={armor} width={w}/>
        <Group Component={Net} data={net} width={w}/>
        <Group Component={Melee} data={melee} width={w}/>
        <Group Component={Percing} data={percing} width={w}/>
        <Group Component={Range} data={range} width={w}/>
        {typeof initiative !== 'undefined' && initiatives.map((init, index) => (
          <Circle key={index} position={index} text={init} width={w}/>
        ))}
        {toughnessArray.map((_, index) => (
          <Circle
            Icon={Toughness}
            color={wounds > index ? 'red' : 'white'}
            key={index}
            position={4 - index}
            width={w}
          />
        ))}
      </Hex>
    </g>
  );
};

export default Tile;
