import React, { FC } from 'react';
import { ArmyTile } from 'nhex-redux';

import { Drag, Svg, Tile } from '../';

import './Hand.css';

interface Props {
  hand: (ArmyTile | null)[]
  margin: number
  width: number
}

const Hand: FC<Props> = (props) => {
  const { hand, margin, width } = props;

  return (
    <div className="Hand">
      {hand.map((tile, index) => tile ? (
        <Drag data={tile} key={tile.id} listener={false}>
          <Tile
            margin={margin}
            tile={tile}
            width={width}
          />
        </Drag>
      ) : (
        <Svg key={index} root width={width}/>
      ))}
    </div>
  );
};

export default Hand;
