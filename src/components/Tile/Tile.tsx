import React, { FC, useContext } from 'react';
import { ArmyTile, TileTypes } from 'nhex-redux';

import { Hex, Svg, TileAction, TileFoundation, TileHQ, TileModule, TileSoldier, dragContext } from '../';
import { SQRT3 } from '../../constants';

interface Props{
  margin: number
  tile: ArmyTile | null
  width: number
}

const Tile: FC<Props> = (props) => {
  const { margin, tile, width } = props;
  const { onPointerDown } = useContext(dragContext);
  if (tile === null) {
    return null;
  }

  const direction = tile.direction || 0;
  const height = SQRT3 * width;
  const w = width - margin;
  const h = SQRT3 * w;

  const rootStyles = {
    cursor: onPointerDown ? 'grab' : 'inherit',
    transform: `rotateZ(${direction * Math.PI / 3}rad) translateX(${margin}px) translateY(${(height - h) / 2}px)`,
    transformOrigin: `${width}px ${height / 2}px`
  };

  return (
    <Svg root width={width}>
      <Hex color="black" width={width}/>
      <g onPointerDown={onPointerDown} style={rootStyles}>
        <Svg width={w}>
          {renderTile(tile)}
        </Svg>
      </g>
    </Svg>
  );

  function renderTile(tile: ArmyTile) {
    switch(tile.type) {
      case TileTypes.Action:
        return (<TileAction tile={tile} width={w}/>);

      case TileTypes.Foundation:
        return (<TileFoundation tile={tile} width={w}/>);

      case TileTypes.HQ:
        return (<TileHQ tile={tile} width={w}/>);

      case TileTypes.Module:
        return (<TileModule tile={tile} width={w}/>);

      case TileTypes.Soldier:
        return (<TileSoldier tile={tile} width={w}/>);

      default:
        return null;
    }
  }
};

export default Tile;
