import React, { FC } from 'react';

interface Props {
  dir: number
  height: number
  width: number
}

const Dir: FC<Props> = (props) => {
  const { children, dir, height, width } = props;

  const styles = {
    transform: `rotateZ(${dir * Math.PI / 3}rad)`,
    transformOrigin: `${width}px ${height / 2}px`
  };

  return (
    <g style={styles}>
      {children}
    </g>
  );
};

export default Dir;
