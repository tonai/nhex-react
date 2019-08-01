import { Armies, smartArmy, Tile as TileType, TileTypes, vegasArmy } from 'nhex-redux';
import React, { FC } from 'react';

import { Board, Clips, TileAction, TileFoundation, TileHQ, TileModule, TileSoldier } from '../../components';

interface Props {
}

const GamePage: FC<Props> = () => {
  const width = 100;
  const margin = 10;

  const board = [
    [vegasArmy.deck[28], null, smartArmy.deck[15]],
    [null, smartArmy.deck[18], smartArmy.hq, smartArmy.deck[30]],
    [smartArmy.deck[22], vegasArmy.deck[29], smartArmy.deck[20], null, smartArmy.deck[13]],
    [vegasArmy.deck[32], vegasArmy.deck[13], smartArmy.deck[25], vegasArmy.deck[25]],
    [smartArmy.deck[12], smartArmy.deck[26], smartArmy.deck[33]]
  ];

  const tiles = board.map(colData => colData.map(renderTile));

  return (
    <div className="GamePage">
      <Clips margin={10} width={width}/>
      <Board cols={5} hex margin={10} tiles={tiles} width={width}/>
    </div>
  );

  function renderTile(tile: TileType | null) {
    if (!tile) {
      return null;
    }

    switch(tile.tileType) {
      case TileTypes.Foundation:
        return (<TileFoundation color={getArmyColor(tile.army)} margin={margin} tile={tile} width={width}/>);

      case TileTypes.Action:
        return (<TileAction tile={tile} width={width}/>);

      case TileTypes.HQ:
        return (<TileHQ color={getArmyColor(tile.army)} margin={margin} tile={tile} width={width}/>);

      case TileTypes.Module:
        return (<TileModule color={getArmyColor(tile.army)} margin={margin} tile={tile} width={width}/>);

      case TileTypes.Soldier:
        return (<TileSoldier color={getArmyColor(tile.army)} margin={margin} tile={tile} width={width}/>);

      default:
        return null;
    }
  }

  function getArmyColor(army: Armies) {
    switch(army) {
      case Armies.Smart:
        return smartArmy.color;

      case Armies.Vegas:
        return vegasArmy.color;
    }
  }
};

export default GamePage;
