import React, { ComponentType, CSSProperties, FC } from 'react';

import { getArray } from '../../../services';

interface Props {
  Component: ComponentType<{ width: number, style?: CSSProperties }>
  data?: [number, number, number, number, number, number]
  margin?: number
  width: number
}

const Group: FC<Props> = (props) => {
  const { Component, data, margin = 10, width } = props;
  const height = Math.sqrt(3) * width;

  if (!data) {
    return null;
  }

  return (
    <g>
      {data.map(renderGroup)}
    </g>
  );

  function renderGroup(strengh: number, index: number) {
    if (!strengh) {
      return null;
    }

    const array = getArray(strengh);
    const styles = {
      transform: `rotateZ(${index * Math.PI / 3}rad)`,
      transformOrigin: `${width}px ${height / 2}px`
    };

    return (
      <g key={index} style={styles}>
        {array.map((_: unknown, index: number) => (
          <Component
            key={index}
            width={width}
            style={{ transform: `translateX(${- margin / 2 * (strengh - 1) + margin * index}px)` }}
          />
        ))}
      </g>
    );
  }
};

export default Group;
