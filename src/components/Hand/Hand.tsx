import React, { FC } from 'react';
import { ArmyTile } from 'nhex-redux';

import { Drag, Tile } from '../';

interface Props {
  hand: ArmyTile[]
  margin: number
  width: number
}

const Hand: FC<Props> = (props) => {
  const { hand, margin, width } = props;

  // @todo update key with unique tile id
  return (
    <div className="Hand">
      {hand.map((tile, index) => (
        <Drag data={tile} key={index} listener={false}>
          <Tile
            margin={margin}
            tile={tile}
            width={width}
          />
        </Drag>
      ))}
    </div>
  );
};

export default Hand;
