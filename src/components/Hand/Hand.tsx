import React, { FC } from 'react';
import { ArmyTile } from 'nhex-redux';
import { Tile } from '../index';

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
        <Tile key={index} margin={margin} tile={tile} width={width}/>
      ))}
    </div>
  );
};

export default Hand;
