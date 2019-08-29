import React, { FC } from 'react';
import classnames from 'classnames';

import { SQRT3 } from '../../../constants';

import './styles.css';

interface Props {
  root?: boolean
  width: number
}

const Svg: FC<Props> = (props) => {
  const { children, root, width } = props;
  const w = width * 2;
  const h = SQRT3 * width;

  return (
    <svg className={classnames({ Svg: root })} viewBox={`0 0 ${w} ${h}`} width={w} height={h}>
      {children}
    </svg>
  );
};

export default Svg;
