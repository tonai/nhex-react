import React, { FC } from 'react';

import { IconProps } from '../../../types';

interface Props extends IconProps {
}

const PushBack: FC<Props> = (props) => {
  const { color = 'white', width } = props;
  const unit = 0.8;

  return (
    <svg viewBox="0 0 24 24" width={width}>
      <g style={{ transform: 'scale(0.9)', transformOrigin: '12px 12px' }}>
        <path d={`M12,0 L0,12 24,12 Z`} fill={color}/>
        <rect x={4} y={12 + unit} width={16} height={4 * unit} />
        <rect x={4} y={12 + 6 * unit} width={16} height={3 * unit} />
        <rect x={4} y={12 + 10 * unit} width={16} height={2 * unit} />
        <rect x={4} y={12 + 13 * unit} width={16} height={unit} />
      </g>
    </svg>
  );
};

export default PushBack;
