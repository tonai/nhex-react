import React, { FC } from 'react';
import { SoldierArmyTile } from 'nhex-redux';

import { SQRT3 } from '../../../constants';

import { Armor, Circle, Hex, Group, Melee, Net, Percing, Properties, Range } from '../';

interface Props {
  margin?: number
  tile: SoldierArmyTile
  width: number
}

const TileSoldier: FC<Props> = (props) => {
  const { margin = 10, tile, width } = props;
  const { armor, color, direction = 0, initiative, melee, net, percing, range } = tile;

  const height = SQRT3 * width;
  const w = width - margin;

  const initiatives = initiative instanceof Array
    ? initiative
    : [initiative];

  const rootStyles = {
    transform: `rotateZ(${direction * Math.PI / 3}rad) translateX(${margin}px)`,
    transformOrigin: `${width}px ${height / 2}px`
  };

  return (
    <g style={rootStyles}>
      <Hex base color={color} width={w}>
        <Group Component={Armor} data={armor} width={w}/>
        <Group Component={Net} data={net} width={w}/>
        <Group Component={Melee} data={melee} width={w}/>
        <Group Component={Percing} data={percing} width={w}/>
        <Group Component={Range} data={range} width={w}/>
        {initiative !== undefined && initiatives.map((init, index) => (
          <Circle key={index} position={index} text={init} width={w}/>
        ))}
        <Properties tile={tile} width={w}/>
      </Hex>
    </g>
  );
};

export default TileSoldier;
