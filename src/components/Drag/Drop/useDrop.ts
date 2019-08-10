import { useContext, useEffect, RefObject } from 'react';

import { isHover } from '../../../services';

import { dragAreaContext, dragPositionContext } from '../DragArea';

export function useDrop(ref: RefObject<HTMLElement> | null, onDrop?: (data?: any) => void): [ boolean ] {
  const { data, drag } = useContext(dragAreaContext);
  const position = useContext(dragPositionContext);
  const hover = ref ? isHover(ref.current, position) : false;
  const dragging = Boolean(drag);

  useEffect(() => {
    if (!dragging && hover && onDrop) {
      onDrop(data);
    }
  }, [data, dragging, hover, onDrop]);

  return [ hover ];
}
