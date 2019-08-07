import React, { FC, ReactNode, createContext, useEffect, useMemo, useState, PointerEvent } from 'react';
import classnames from 'classnames';

import './styles.css';

interface Position {
  left: number
  top: number
}

type StartFn = (pageX: number, pageY: number, offsetLeft: number, offsetTop: number, children: ReactNode) => void;
export interface DragContext {
  drag: ReactNode
  start?: StartFn
}

export const dragAreaContext = createContext<DragContext>({ drag: null });

const DragArea: FC<{}> = (props) => {
  const { children } = props;

  const [ position, setPosition ] = useState<Position>({ left: 0, top: 0 });
  const [ offset, setOffset ] = useState<Position>({ left: 0, top: 0 });
  const [ drag, setDrag ] = useState<ReactNode>(null);

  const start: StartFn = (pageX, pageY, offsetLeft, offsetTop, children) => {
    setPosition({
      left: pageX,
      top: pageY
    });
    setOffset({
      left: pageX - offsetLeft,
      top: pageY - offsetTop
    });
    setDrag(children);
  };
  const context = useMemo(() => ({ drag, start }), [drag]);
  const dragging = Boolean(drag);

  useEffect(() => {
    const handlePointerMove: EventListener = (event: Event) => {
      const { pageX, pageY } = event as any as PointerEvent;
      setPosition({
        left: pageX,
        top: pageY
      });
    };
    const handlePointerUp: EventListener = (event: Event) => {
      const { pageX, pageY } = event as any as PointerEvent;
      setPosition({
        left: pageX,
        top: pageY
      });
      setDrag(null);
    };

    if (dragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
      return () => {
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerup', handlePointerUp);
      }
    }
  }, [dragging, setPosition]);

  return (
    <div className={classnames('DragArea', { dragging })}>
      <dragAreaContext.Provider value={context}>
        {children}
        {dragging && (
          <div className="DragArea__item" style={{
            left: -offset.left,
            top: -offset.top,
            transform: `translateX(${position.left}px) translateY(${position.top}px)`
          }}>
            {drag}
          </div>
        )}
      </dragAreaContext.Provider>
    </div>
  );
};

export default DragArea;
