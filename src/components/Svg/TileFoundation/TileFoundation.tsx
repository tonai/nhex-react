import React, { ComponentType, FC } from 'react';
import { FoundationArmyTile, Foundations } from 'nhex-redux';

import { SQRT3 } from '../../../constants';
import { FoundationProps } from '../../../types';

import { Hex, Mine } from '../';

interface Props {
  tile: FoundationArmyTile
  width: number
}

const TileFoundation: FC<Props> = (props) => {
  const { tile, width } = props;
  const { color, foundationType } = tile;
  const Icon = getFoundationIcon();
  const height = SQRT3 * width;

  return (
    <>
      <Hex color={color} width={width}/>
      {Icon && (<Icon cx={width} cy={height / 2} width={width}/>)}
    </>
  );

  function getFoundationIcon(): ComponentType<FoundationProps> | null {
    switch(foundationType) {
      case Foundations.Mine:
        return Mine;

      default:
        return null
    }
  }
};

export default TileFoundation;
