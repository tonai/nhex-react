import React, { CSSProperties, FC, PointerEvent, createContext, useRef } from 'react';
import classnames from 'classnames';

import { useDrag } from './useDrag';

import './styles.css';

interface Props {
  active?: boolean
  data?: any
  listener?: boolean
  style?: CSSProperties
}

type OnPointerDownFn = (event: PointerEvent<Element>) => void;
export interface DragContext {
  onPointerDown?: OnPointerDownFn
}

export const dragContext = createContext<DragContext>({});

const Drag: FC<Props> = (props) => {
  const { active = true, children, data, listener = true, style = {} } = props;
  
  const ref = useRef<HTMLDivElement>(null);
  const [ dragging, onStart ] = useDrag(ref, children);
  const onPointerDown: OnPointerDownFn = (event: PointerEvent<Element>) => {
    const { pageX, pageY } = event;
    if (active) {
      onStart(pageX, pageY, data);
    }
  };

  const computedStyle = dragging && ref.current ? {
    height: ref.current.offsetHeight,
    width: ref.current.offsetWidth,
    ...style
  } : style;

  if (listener) {
    return (
      <div className={classnames('Drag', { active })} onPointerDown={onPointerDown} ref={ref} style={computedStyle}>
        {!dragging && children}
      </div>
    );
  }

  const context = { onPointerDown };
  return (
    <dragContext.Provider value={context}>
      <div className="Drag" ref={ref} style={computedStyle}>
        {!dragging && children}
      </div>
    </dragContext.Provider>
  );
};

export default Drag;
