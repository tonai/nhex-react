import React, { FC } from 'react';
import { BoardTile, smartArmy } from 'nhex-redux';

import { Board, Clips, Tile } from '../../components';

interface Props {
}

const GamePage: FC<Props> = () => {
  const width = 100;
  const margin = 10;

  const board = [
    [null, null, smartArmy.deck[15] as BoardTile],
    [null, smartArmy.deck[18] as BoardTile, null, null],
    [smartArmy.deck[22] as BoardTile, null, smartArmy.deck[20] as BoardTile, null, smartArmy.deck[13] as BoardTile],
    [null, null, smartArmy.deck[25] as BoardTile, null],
    [smartArmy.deck[12] as BoardTile, null, null]
  ];
  
  const tiles = board.map(colData =>
    colData.map(tile =>
      tile && (<Tile color={smartArmy.color} margin={margin} tile={tile} width={width}/>)
    )
  );

  return (
    <div className="GamePage">
      <Clips margin={10} width={width}/>
      <Board cols={5} hex margin={10} tiles={tiles} width={width}/>
    </div>
  );
};

export default GamePage;
