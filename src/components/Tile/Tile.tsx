import React, { FC } from 'react';
import { BoardTile, TileTypes } from 'nhex-redux';

import { SQRT3 } from '../../constants';
import { getArray } from '../../services';

import {
  Armor,
  Circle,
  FlashBack,
  Hex,
  Group,
  Melee,
  Module,
  Move,
  Net,
  Percing,
  Range,
  Replace,
  Toughness
} from '../Svg';

interface Props {
  color: string,
  margin?: number
  tile: BoardTile
  width: number
}

const Tile: FC<Props> = (props) => {
  const { color, margin = 10, tile, width } = props;
  const {
    armor,
    direction = 0,
    flashBack,
    initiative,
    melee,
    mobility,
    module,
    moduleType,
    net,
    percing,
    range,
    replace,
    tileType,
    toughness,
    wounds
  } = tile;

  const height = SQRT3 * width;
  const w = width - margin;

  const initiatives = initiative instanceof Array
    ? initiative
    : [initiative];

  const rootStyles = {
    transform: `rotateZ(${direction * Math.PI / 3}rad) translateX(${margin}px)`,
    transformOrigin: `${width}px ${height / 2}px`
  };

  return (
    <g style={rootStyles}>
      <Hex base color={color} width={w}>
        {moduleType && tileType === TileTypes.HQ && (
          <Module module={module} moduleType={moduleType} text={toughness - wounds} width={w} />
        )}
        {moduleType && tileType !== TileTypes.HQ && (
          <Module moduleType={moduleType} module={module} width={w} />
        )}
        <Group Component={Armor} data={armor} width={w}/>
        <Group Component={Net} data={net} width={w}/>
        <Group Component={Melee} data={melee} width={w}/>
        <Group Component={Percing} data={percing} width={w}/>
        <Group Component={Range} data={range} width={w}/>
        {initiative !== undefined && initiatives.map((init, index) => (
          <Circle key={index} position={index} text={init} width={w}/>
        ))}
        {renderCustomProperties()}
      </Hex>
    </g>
  );

  function renderCustomProperties() {
    if (tileType === TileTypes.HQ) {
      return null;
    }

    const toughnessArray = getArray(toughness - 1);

    return (
      <>
        {toughnessArray.map((_, index) => (
          <Circle
            Icon={Toughness}
            color={wounds > index ? 'red' : 'white'}
            key={index}
            position={4 - index}
            width={w}
          />
        ))}
        {mobility && (
          <Circle Icon={Move} position={2} width={w}/>
        )}
        {replace && (
          <Circle Icon={Replace} position={5} width={w}/>
        )}
        {flashBack && (
          <Circle Icon={FlashBack} position={5} width={w} iconProps={{ style: { transform: 'translateX(-1px)' } }}/>
        )}
      </>
    );
  }
};

export default Tile;
