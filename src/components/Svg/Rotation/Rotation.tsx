import React, { FC } from 'react';

import { IconProps } from '../../../types';

interface Props extends IconProps {
}

const Rotation: FC<Props> = (props) => {
  const { color = 'white', width } = props;

  return (
    <svg viewBox="0 0 24 24" width={width}>
    </svg>
  );
};

export default Rotation;
