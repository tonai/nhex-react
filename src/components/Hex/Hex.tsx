import React, { FC } from 'react';

import './styles.css';

interface Props {
  color?: string
  width: number
}

const Hex: FC<Props> = (props) => {
  const { children, color = 'white', width } = props;
  const height = Math.sqrt(3) * width;

  return (
    <div className="Hex" style={{ backgroundColor: color, height , width }}>
      <div className="Hex__left" style={{
        borderColor: `transparent ${color}`,
        borderWidth: `${height / 2}px ${width / 2}px ${height / 2}px 0`
      }}/>
      <div className="Hex__right" style={{
        borderColor: `transparent ${color}`,
        borderWidth: `${height / 2}px 0 ${height / 2}px ${width / 2}px`
      }}/>
      <div className="Hex__content">
        {children}
      </div>
    </div>
  );
};

export default Hex;
