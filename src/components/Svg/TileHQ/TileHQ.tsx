import React, { FC } from 'react';
import { HQArmyTile } from 'nhex-redux';

import { SQRT3 } from '../../../constants';

import { Circle, Hex, Group, Melee, Module } from '../';

interface Props {
  margin?: number
  tile: HQArmyTile
  width: number
}

const TileHQ: FC<Props> = (props) => {
  const { margin = 10, tile, width } = props;
  const { color, direction = 0, initiative, melee, module, moduleType, toughness, wounds } = tile;

  const height = SQRT3 * width;
  const w = width - margin;

  const rootStyles = {
    transform: `rotateZ(${direction * Math.PI / 3}rad) translateX(${margin}px)`,
    transformOrigin: `${width}px ${height / 2}px`
  };

  return (
    <g style={rootStyles}>
      <Hex base color={color} width={w}>
        <Module module={module} moduleType={moduleType} text={toughness - wounds} width={w} />
        <Group Component={Melee} data={melee} width={w}/>
        <Circle position={0} text={initiative} width={w}/>
      </Hex>
    </g>
  );
};

export default TileHQ;
