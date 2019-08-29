import React, { FC } from 'react';
import { connect } from 'react-redux';
import { gameConfirm, AppState } from 'nhex-redux';

interface Props {
  confirm: boolean
  gameConfirm: () => void
}

const Confirm: FC<Props> = (props) => {
  const { confirm, gameConfirm } = props;

  if (!confirm) {
    return null;
  }

  return (
    <div className="Confirm">
      <button onClick={handleClick}>Confirm</button>
    </div>
  );

  function handleClick() {
    gameConfirm();
  }
};

const mapStateToProps = (state: AppState) => ({
  confirm: Boolean(state.game.confirmAction)
});

const mapDispatchToProps = {
  gameConfirm
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
