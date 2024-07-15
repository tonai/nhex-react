import React, { FC } from 'react';

import { SQRT3 } from '../../../constants';
import { getArray, modulo } from '../../../services';
import { SvgProps } from '../../../types';

import { Dir } from '../Dir';

type boolOrNum = boolean | number;

interface Props {
  Component: FC<SvgProps>
  data?: [boolOrNum, boolOrNum, boolOrNum, boolOrNum, boolOrNum, boolOrNum]
  margin?: number
  width: number
}

const Group: FC<Props> = (props) => {
  const { Component, data, margin = 10, width } = props;
  const height = SQRT3 * width;

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
    return (
      <Dir dir={dir} key={dir} height={height} width={width}>
        {array.map((_: unknown, index: number) => (
          <Component
            key={index}
            next={Boolean(data[modulo(dir + 1, 6)])}
            prev={Boolean(data[modulo(dir - 1, 6)])}
            width={width}
            style={{ transform: `translateX(${- margin / 2 * (Number(strengh) - 1) + margin * index}px)` }}
          />
        ))}
      </Dir>
    );
  }
};

export default Group;
