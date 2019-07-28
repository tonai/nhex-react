import React, { FC } from 'react';
import { BoardTile, smartArmy, vegasArmy } from 'nhex-redux';

import { Board, Tile } from '../../components';

interface Props {
}

const GamePage: FC<Props> = () => {
  const width = 100;
  const board = [
    [null, null, null],
    [null, smartArmy.deck[18] as BoardTile, null, null],
    [null, null, smartArmy.deck[20] as BoardTile, null, null],
    [null, null, smartArmy.deck[25] as BoardTile, null],
    [smartArmy.deck[12] as BoardTile, null, null]
  ];

  const tiles = board.map(colData =>
    colData.map(tile =>
      tile && (<Tile tile={tile} width={width}/>)
    )
  );

  return (
    <div className="GamePage">
      <Board cols={5} hex margin={10} tiles={tiles} width={width} />
    </div>
  );
};

export default GamePage;
