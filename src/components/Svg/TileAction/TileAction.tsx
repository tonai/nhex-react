import React, { ComponentType, FC } from 'react';
import { ActionArmyTile, ActionTiles } from 'nhex-redux';

import { IconProps } from '../../../types';

import { Battle, Hex, Move } from '../';

interface Props {
  tile: ActionArmyTile
  width: number
}

const TileAction: FC<Props> = (props) => {
  const { tile, width } = props;
  const { actionType, color } = tile;
  const Icon = getActionIcon();
  const w = 3 * width / 4;

  return (
    <Hex base color={color} width={width}>
      {Icon && (
        <g style={{ transform: `translateX(${width / 4}px)` }}>
          <Icon color="black" width={w * 2}/>
        </g>
      )}
    </Hex>
  );

  function getActionIcon(): ComponentType<IconProps> | null {
    switch(actionType) {
      case ActionTiles.Battle:
        return Battle;

      case ActionTiles.Move:
        return Move;

      default:
        return null
    }
  }
};

export default TileAction;
