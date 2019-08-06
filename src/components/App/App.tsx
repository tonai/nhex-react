import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'nhex-redux';

import { GamePage } from '../../pages';

interface Props {
}

const store = createStore();
const App: FC<Props> = () => {
  return (
    <Provider store={store}>
      <GamePage/>
    </Provider>
  );
};

export default App;
