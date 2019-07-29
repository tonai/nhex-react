import React, { ComponentType, FC } from 'react';

import { getArray, modulo } from '../../../services';
import { SvgProps } from '../../../types';

type boolOrNum = boolean | number;

interface Props {
  Component: ComponentType<SvgProps>
  data?: [boolOrNum, boolOrNum, boolOrNum, boolOrNum, boolOrNum, boolOrNum]
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

  function renderGroup(strengh: boolOrNum, dir: number) {
    if (!strengh || !data) {
      return null;
    }

    const array = getArray(Number(strengh));
    const styles = {
      transform: `rotateZ(${dir * Math.PI / 3}rad)`,
      transformOrigin: `${width}px ${height / 2}px`
    };

    return (
      <g key={dir} style={styles}>
        {array.map((_: unknown, index: number) => (
          <Component
            key={index}
            next={Boolean(data[modulo(dir + 1, 6)])}
            prev={Boolean(data[modulo(dir - 1, 6)])}
            width={width}
            style={{ transform: `translateX(${- margin / 2 * (Number(strengh) - 1) + margin * index}px)` }}
          />
        ))}
      </g>
    );
  }
};

export default Group;
