import React, { FC } from 'react';
import { smartArmy, vegasArmy } from 'nhex-redux';

import { Board, Tile } from '../../components';

interface Props {
}

const GamePage: FC<Props> = () => {
  const board = [
    [null, null, null],
    [null, smartArmy.deck[0], null, null],
    [null, null, vegasArmy.deck[0], null, null],
    [null, null, null, null],
    [null, null, null]
  ];

  const tiles = board.map(colData =>
    colData.map(tile =>
      tile && (<Tile width={80} {...tile}/>)
    )
  );

  return (
    <div className="GamePage">
      <Board cols={5} hex margin={10} tiles={tiles} width={80} />
    </div>
  );
};

export default GamePage;
