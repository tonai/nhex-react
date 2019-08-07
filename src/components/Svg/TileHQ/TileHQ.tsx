import React, { FC } from 'react';
import { HQArmyTile } from 'nhex-redux';

import { Circle, Hex, Group, Melee, Module } from '../';

interface Props {
  tile: HQArmyTile
  width: number
}

const TileHQ: FC<Props> = (props) => {
  const { tile, width } = props;
  const { color, initiative, melee, module, moduleType, toughness, wounds } = tile;

  return (
    <>
      <Hex color={color} width={width}/>
      <Module module={module} moduleType={moduleType} text={toughness - wounds} width={width} />
      <Group Component={Melee} data={melee} width={width}/>
      <Circle position={0} text={initiative} width={width}/>
    </>
  );
};

export default TileHQ;
