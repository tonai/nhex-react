import { useContext, useEffect, RefObject } from 'react';

import { isInsideSquare } from '../../../services';
import { TestFn } from '../../../types';

import { dragAreaContext, dragPositionContext } from '../DragArea';

export function useDrop(ref: RefObject<HTMLElement> | null, onDrop?: (data?: any) => void, testFn: TestFn = isInsideSquare): [ boolean ] {
  const { data, drag } = useContext(dragAreaContext);
  const position = useContext(dragPositionContext);
  const hover = ref ? testFn(ref.current, position) : false;
  const dragging = Boolean(drag);

  useEffect(() => {
    if (!dragging && hover && onDrop) {
      onDrop(data);
    }
  }, [data, dragging, hover, onDrop]);

  return [ hover ];
}
