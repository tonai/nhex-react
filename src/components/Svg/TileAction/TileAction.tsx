import React, { ComponentType, FC } from 'react';
import { ActionTile, ActionTiles } from 'nhex-redux';

import { IconProps } from '../../../types';

import { Hex, Move } from '../';

interface Props {
  color?: string,
  tile: ActionTile
  width: number
}

const TileAction: FC<Props> = (props) => {
  const { color = 'black', tile, width } = props;
  const { type } = tile;
  const Icon = getActionIcon();

  return (
    <Hex base color={color} width={width}>
      {Icon && (
        <g style={{ transform: `translateX(${width / 8}px)` }}>
          <Icon width={3 * width / 2}/>
        </g>
      )}
    </Hex>
  );

  function getActionIcon(): ComponentType<IconProps> | null {
    switch(type) {
      case ActionTiles.Move:
        return Move;

      default:
        return null
    }
  }
};

export default TileAction;
