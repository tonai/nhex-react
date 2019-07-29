import React, { FC } from 'react';

import { ModuleProps } from '../../../types';

interface Props extends ModuleProps {
}

const Medic: FC<Props> = (props) => {
  const { color = 'black', cx, cy, width } = props;
  const w = width / 6;
  const l = width / 4;
  
  return (
    <path
      d={`M${cx + w / 2},${cy - w / 2 - l} v${l} h${l} v${w} h${- l} v${l} h${- w} v${- l} h${- l} v${- w} h${l} v${- l} z`}
      fill={color}
    />
  );
};

export default Medic;
