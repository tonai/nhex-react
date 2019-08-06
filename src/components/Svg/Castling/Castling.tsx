import React, { FC } from 'react';

import { IconProps } from '../../../types';

interface Props extends IconProps {
}

const Castling: FC<Props> = (props) => {
  const { color = 'white', width } = props;
  const d = 'M12,1 v2 h-6 a3,3 0 0,0 -3,3 v9 h4 v-7 a1,1 0 0,1 1,-1 h4 v2 l6.928203230275509,-4 Z`';

  return (
    <svg viewBox="0 0 24 24" width={width}>
      <path
        d={d}
        fill={color}
      />
      <path
        d={d}
        fill={color}
        style={{ transform: 'rotateZ(180deg)', transformOrigin: '12px 12px' }}
      />
    </svg>
  );
};

export default Castling;
