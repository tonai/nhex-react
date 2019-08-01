import React, { FC } from 'react';
import { BoardTile } from 'nhex-redux';

import { getArray } from '../../../services';

import { Circle, FlashBack, Move, Replace, Toughness } from '../';

interface Props {
  tile: BoardTile
  width: number
}

const Properties: FC<Props> = (props) => {
  const { tile, width } = props;
  const { flashBack, mobility, replace, toughness, wounds } = tile;
  const toughnessArray = getArray(toughness - 1);

  return (
    <>
      {toughnessArray.map((_, index) => (
        <Circle
          Icon={Toughness}
          color={wounds > index ? 'red' : 'white'}
          key={index}
          position={4 - index}
          width={width}
        />
      ))}
      {mobility && (
        <Circle Icon={Move} position={2} width={width}/>
      )}
      {replace && (
        <Circle Icon={Replace} position={5} width={width}/>
      )}
      {flashBack && (
        <Circle Icon={FlashBack} position={5} width={width} iconProps={{ style: { transform: 'translateX(-1px)' } }}/>
      )}
    </>
  );
};

export default Properties;
