import React, { ComponentType, FC } from 'react';
import { ActionArmyTile, ActionTiles } from 'nhex-redux';

import { IconProps } from '../../../types';

import { Battle, Castling, Hex, Move, PushBack, Rotation, Sniper, Terror } from '../';

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
    <>
      <Hex color={color} width={width}/>
      {Icon && (
        <g style={{ transform: `translateX(${width - w}px)` }}>
          <Icon color="black" width={w * 2}/>
        </g>
      )}
    </>
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
