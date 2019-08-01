import React, { FC } from 'react';
import { ModuleTile } from 'nhex-redux';

import { SQRT3 } from '../../../constants';

import { Hex, Module, } from '../';
import { Properties } from '../index';

interface Props {
  color: string,
  margin?: number
  tile: ModuleTile
  width: number
}

const TileModule: FC<Props> = (props) => {
  const { color, margin = 10, tile, width } = props;
  const { direction = 0, module, moduleType, } = tile;

  const height = SQRT3 * width;
  const w = width - margin;

  const rootStyles = {
    transform: `rotateZ(${direction * Math.PI / 3}rad) translateX(${margin}px)`,
    transformOrigin: `${width}px ${height / 2}px`
  };

  return (
    <g style={rootStyles}>
      <Hex base color={color} width={w}>
        <Module moduleType={moduleType} module={module} width={w} />
        <Properties tile={tile} width={w}/>
      </Hex>
    </g>
  );
};

export default TileModule;
