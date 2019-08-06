import React, { FC } from 'react';
import { ArmyTile, TileTypes } from 'nhex-redux';

import { Cell, TileAction, TileFoundation, TileHQ, TileModule, TileSoldier } from '../';

interface Props {
  margin: number
  tile: ArmyTile | null
  width: number
}

const Tile: FC<Props> = (props) => {
  const { margin, tile, width } = props;

  if (tile === null) {
    return null;
  }

  return (
    <Cell width={width}>
      {renderTile(tile)}
    </Cell>
  );

  function renderTile(tile: ArmyTile) {
    switch(tile.type) {
      case TileTypes.Action:
        return (<TileAction tile={tile} width={width}/>);

      case TileTypes.Foundation:
        return (<TileFoundation margin={margin} tile={tile} width={width}/>);

      case TileTypes.HQ:
        return (<TileHQ margin={margin} tile={tile} width={width}/>);

      case TileTypes.Module:
        return (<TileModule margin={margin} tile={tile} width={width}/>);

      case TileTypes.Soldier:
        return (<TileSoldier margin={margin} tile={tile} width={width}/>);

      default:
        return null;
    }
  }
};

export default Tile;
