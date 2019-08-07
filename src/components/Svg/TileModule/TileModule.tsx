import React, { FC } from 'react';
import { ModuleArmyTile } from 'nhex-redux';

import { Armor, Group, Hex, Module, Properties } from '../';

interface Props {
  tile: ModuleArmyTile
  width: number
}

const TileModule: FC<Props> = (props) => {
  const { tile, width } = props;
  const { armor, color, module, moduleType } = tile;

  return (
    <>
      <Hex color={color} width={width}/>
      <Module moduleType={moduleType} module={module} width={width}/>
      <Group Component={Armor} data={armor} width={width}/>
      <Properties tile={tile} width={width}/>
    </>
  );
};

export default TileModule;
