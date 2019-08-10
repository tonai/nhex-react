import { useContext, ReactNode, RefObject } from 'react';

import { dragAreaContext } from '../DragArea';

export function useDrag(ref: RefObject<HTMLElement> | null, children: ReactNode): [ boolean, (pageX: number, pageY: number, data?: any) => void ] {
  const { drag, start } = useContext(dragAreaContext);
  const dragging = drag === children;

  const onStart = (pageX: number, pageY: number, data?: any) => {
    if (!dragging && ref && ref.current && start) {
      start(pageX, pageY, ref.current, children, data);
    }
  };

  return [ dragging, onStart ];
}
