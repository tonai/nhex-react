import React, { createContext, FC, useRef } from 'react';

import { useDrop } from './useDrop';

interface Props {
  onDrop?: (data?: any) => void
}
export const dropContext = createContext<boolean>(false);

const Drop: FC < Props > = (props) => {
  const { children, onDrop } = props;

  const ref = useRef<HTMLDivElement>(null);
  const [ isHover ] = useDrop(ref, onDrop);

  return (
    <div className="Drop" ref={ref}>
      <dropContext.Provider value={isHover}>
        {children}
      </dropContext.Provider>
    </div>
  );
};

export default Drop;
