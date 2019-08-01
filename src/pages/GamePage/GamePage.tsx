import { smartArmy, ArmyTile, TileTypes, vegasArmy } from 'nhex-redux';
import React, { FC } from 'react';

import { Board, Clips, TileAction, TileFoundation, TileHQ, TileModule, TileSoldier } from '../../components';

interface Props {
}

const GamePage: FC<Props> = () => {
  const width = 100;
  const margin = 10;

  const board = [
    [vegasArmy.deck[11], vegasArmy.deck[16], smartArmy.deck[15]],
    [vegasArmy.deck[0], smartArmy.deck[18], smartArmy.hq, smartArmy.deck[30]],
    [smartArmy.deck[22], vegasArmy.deck[29], smartArmy.deck[20], vegasArmy.deck[5], smartArmy.deck[13]],
    [vegasArmy.deck[32], vegasArmy.deck[13], smartArmy.deck[25], vegasArmy.deck[25]],
    [smartArmy.deck[10], smartArmy.deck[26], smartArmy.deck[33]]
  ];

  const tiles = board.map(colData => colData.map(renderTile));

  return (
    <div className="GamePage">
      <Clips margin={10} width={width}/>
      <Board cols={5} hex margin={10} tiles={tiles} width={width}/>
    </div>
  );

  function renderTile(tile: ArmyTile | null) {
    if (!tile) {
      return null;
    }

    switch(tile.type) {
      case TileTypes.Action:
        return (<TileAction tile={tile} width={width}/>);

      case TileTypes.Foundation:
        return (<TileFoundation margin={margin} tile={tile} width={width}/>);

      case TileTypes.HQ:
        return (<TileHQ margin={margin} tile={tile} width={width}/>);

      case TileTypes.Module:
        return (<TileModule margin={margin} tile={tile} width={width}/>);

      case TileTypes.Soldier:
        return (<TileSoldier margin={margin} tile={tile} width={width}/>);

      default:
        return null;
    }
  }
};

export default GamePage;
