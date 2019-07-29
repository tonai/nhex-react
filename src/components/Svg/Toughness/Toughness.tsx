import React, { FC } from 'react';

import { IconProps } from '../../../types';

interface Props extends IconProps {
}

const Toughness: FC < Props > = (props) => {
  const { color = 'white', style, width } = props;

  return (
    <svg style={style} viewBox="0 0 24 24" width={width}>
      <path d="M12,1 L3,5 V11 c0,5.55 3.84,10.74 9,12 5.16,-1.26 9,-6.45 9,-12 V5 Z" fill={color}/>
    </svg>
  );
};

export default Toughness;
