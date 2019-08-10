import React, { createContext, FC, useContext, useEffect, useRef } from 'react';

import { isHover } from '../../../services';

import { dragAreaContext, dragPositionContext } from '../DragArea';

interface Props {
  onDrop?: (data?: any) => void
}
export const dropContext = createContext<boolean>(false);

const Drop: FC < Props > = (props) => {
  const { children, onDrop } = props;
  const { data, drag } = useContext(dragAreaContext);
  const position = useContext(dragPositionContext);
  const ref = useRef<HTMLDivElement>(null);
  const hover = isHover(ref.current, position);
  const dragging = Boolean(drag);

  useEffect(() => {
    if (!dragging && hover && onDrop) {
      onDrop(data);
    }
  }, [data, dragging, hover, onDrop]);

  return (
    <div className="Drop" ref={ref}>
      <dropContext.Provider value={hover}>
        {children}
      </dropContext.Provider>
    </div>
  );
};

export default Drop;
