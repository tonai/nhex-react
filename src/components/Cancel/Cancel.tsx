import React, { FC } from 'react';
import { connect } from 'react-redux';
import { gameCancel, AppState } from 'nhex-redux';

interface Props {
  cancel: boolean
  gameCancel: () => void
}

const Cancel: FC<Props> = (props) => {
  const { cancel, gameCancel } = props;

  if (!cancel) {
    return null;
  }

  return (
    <div className="Confirm">
      <button onClick={handleClick}>Cancel</button>
    </div>
  );

  function handleClick() {
    gameCancel();
  }
};

const mapStateToProps = (state: AppState) => ({
  cancel: Boolean(state.game.cancelAction)
});

const mapDispatchToProps = {
  gameCancel
};

export default connect(mapStateToProps, mapDispatchToProps)(Cancel);
