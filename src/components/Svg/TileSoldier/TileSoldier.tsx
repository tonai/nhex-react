import React, { FC } from 'react';
import { SoldierArmyTile } from 'nhex-redux';

import { Armor, Circle, Hex, Group, Melee, Net, Percing, Properties, Range } from '../';

interface Props {
  tile: SoldierArmyTile
  width: number
}

const TileSoldier: FC<Props> = (props) => {
  const { tile, width } = props;
  const { armor, color, initiative, melee, net, percing, range } = tile;
  const initiatives = initiative instanceof Array
    ? initiative
    : [initiative];

  return (
    <>
      <Hex color={color} width={width}/>
      <Group Component={Armor} data={armor} width={width}/>
      <Group Component={Net} data={net} width={width}/>
      <Group Component={Melee} data={melee} width={width}/>
      <Group Component={Percing} data={percing} width={width}/>
      <Group Component={Range} data={range} width={width}/>
      {initiative !== undefined && initiatives.map((init, index) => (
        <Circle key={index} position={index} text={init} width={width}/>
      ))}
      <Properties tile={tile} width={width}/>
    </>
  );
};

export default TileSoldier;
