import React, { createContext, FC, useContext, useRef } from 'react';

import { isHover } from '../../../services';

import { dragPositionContext } from '../DragArea';

interface Props {
}

export const dropContext = createContext<boolean>(false);

const Drop: FC < Props > = (props) => {
  const { children } = props;
  const position = useContext(dragPositionContext);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="Drop" ref={ref}>
      <dropContext.Provider value={isHover(ref.current, position)}>
        {children}
      </dropContext.Provider>
    </div>
  );
};

export default Drop;
