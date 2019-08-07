import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { gameInit, Armies, AppState, GameState } from 'nhex-redux';

import { Board, Clips, DragArea, Hand } from '../../components';

interface Props {
  game: GameState
  gameInit: typeof gameInit
}

const GamePage: FC<Props> = (props) => {
  const { game, gameInit } = props;
  const width = 100;
  const margin = 10;

  useEffect(() => {
    gameInit([Armies.Smart, Armies.Vegas]);
  }, [gameInit]);
  return (
    <DragArea>
      <Clips margin={10} width={width}/>
      <Board board={game.board} cols={5} hex margin={margin} width={width}/>
      <Hand hand={game.playerHand} margin={margin} width={width}/>
    </DragArea>
  );
};

const mapStateToProps = (state: AppState) => ({
  game: state.game
});

const mapDispatchToProps = {
  gameInit
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
