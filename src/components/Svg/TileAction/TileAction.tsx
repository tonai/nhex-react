import React, { ComponentType, FC } from 'react';
import { ActionArmyTile, ActionTiles } from 'nhex-redux';

import { IconProps } from '../../../types';

import { Battle, Castling, Hex, Move, PushBack, Rotation, Sniper, Terror } from '../';

interface Props {
  margin?: number
  tile: ActionArmyTile
  width: number
}

const TileAction: FC<Props> = (props) => {
  const { margin = 0, tile, width } = props;
  const { actionType, color } = tile;
  const Icon = getActionIcon();
  const w = width - margin;

  const rootStyles = {
    transform: `translateX(${margin}px)`,
  };

  return (
    <g style={rootStyles}>
      <Hex base color={color} width={w}>
        {Icon && (
          <g style={{ transform: `translateX(${w / 4}px)` }}>
            <Icon color="black" width={3 * w / 2}/>
          </g>
        )}
      </Hex>
    </g>
  );

  function getActionIcon(): ComponentType<IconProps> | null {
    switch(actionType) {
      case ActionTiles.Battle:
        return Battle;

      case ActionTiles.Castling:
        return Castling;

      case ActionTiles.Move:
        return Move;

      case ActionTiles.PushBack:
        return PushBack;

      case ActionTiles.Rotation:
        return Rotation;

      case ActionTiles.Sniper:
        return Sniper;

      case ActionTiles.Terror:
        return Terror;

      default:
        return null
    }
  }
};

export default TileAction;
