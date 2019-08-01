import React, { FC } from 'react';

import { createCirclePath } from '../../../services';
import { IconProps } from '../../../types';

interface Props extends IconProps {
}

const Terror: FC<Props> = (props) => {
  const { color = 'white', width } = props;
  const circle = createCirclePath(12, 12);

  return (
    <svg viewBox="0 0 24 24" width={width}>
      <path
        d={`M6,12 C9,7.5 15,7.5 18,12 C15,16.5 9,16.5 6,12 ${circle(2)} Z`}
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Terror;
