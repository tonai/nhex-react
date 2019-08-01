import React, { ComponentType, FC } from 'react';
import { FoundationArmyTile, Foundations } from 'nhex-redux';

import { SQRT3 } from '../../../constants';
import { FoundationProps } from '../../../types';

import { Hex, Mine } from '../';

interface Props {
  margin?: number
  tile: FoundationArmyTile
  width: number
}

const TileFoundation: FC<Props> = (props) => {
  const { margin = 10, tile, width } = props;
  const { color, foundationType } = tile;
  const Icon = getFoundationIcon();

  const height = SQRT3 * width;
  const w = width - margin;
  const h = SQRT3 * w;
  const cx = w;
  const cy = h / 2;

  const rootStyles = {
    transform: `translateX(${margin}px)`,
    transformOrigin: `${width}px ${height / 2}px`
  };

  return (
    <g style={rootStyles}>
      <Hex base color={color} width={w}>
        {Icon && (<Icon cx={cx} cy={cy} width={width}/>)}
      </Hex>
    </g>
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
