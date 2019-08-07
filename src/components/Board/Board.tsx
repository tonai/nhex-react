import React, { FC } from 'react';
import { BoardArmyTile } from 'nhex-redux';

import { getArray } from '../../services';

import { Hex, Svg, Tile } from '../';

import './styles.css';

interface Props {
  board?: BoardArmyTile[][]
  cols: number
  hex?: boolean
  margin?: number
  oddEven?: boolean
  rows?: number
  width: number
}

const Board: FC<Props> = (props) => {
  let { board, cols, hex = false, margin = 0, oddEven = false, rows, width } = props;
  cols = hex && cols % 2 === 0 ? cols - 1 : cols;
  rows = hex
    ? cols % 4 === 1 ? cols : cols + 1
    : rows ? rows : cols;

  const colArray = getArray(cols);
  const rowArrayEven = getArray(rows);
  const rowArrayOdd = getArray(rows - 1);
  const midColIndex = (cols + 1) / 2 - 1;

  return (
    <div className="Board" style={{
      margin: `0 ${width / 4 - margin / 2}px`,
      width: (width + width / 2 + margin) * cols
    }}>
      {colArray.map(renderCol)}
    </div>
  );

  function renderCol(_: unknown, col: number) {
    const isEven = col % 2 === Number(oddEven);
    const rowArray = isEven ? rowArrayEven : rowArrayOdd;
    const emptyRows = rowArray.map((_: unknown, row: number) => isEmptyCell(col, row, rowArray.length));

    return (
      <div className="Board__col" key={col} style={{ margin: `0 ${- width / 4 + margin / 2}px` }}>
        {rowArray.map((_: unknown, row: number) => (
          <div key={row} style={{ marginBottom: `${row === rowArray.length - 1 ? 0 : margin}px` }}>
            {renderCell(col, row, emptyRows)}
          </div>
        ))}
      </div>
    )
  }

  function renderCell(col: number, row: number, emptyRows: boolean[]) {
    const empty = emptyRows[row];

    if (empty) {
      return null;
    }

    const tileRow = emptyRows.reduce(
      (acc: number, empty: boolean, index: number) => index < row ? acc - Number(empty) : acc,
      row
    );

    if (board && board[col] && board[col][tileRow]) {
      return (<Tile margin={margin} tile={board[col][tileRow]} width={width}/>);
    }

    return (
      <Svg root width={width}>
        <Hex color="black" width={width}/>
      </Svg>
    );
  }

  function isEmptyCell(col: number, row: number, length: number): boolean {
    if (!hex) {
      return false;
    }

    const cellLength = cols - Math.abs(col - midColIndex);
    if (cellLength === length) {
      return false
    }

    const midRow = (length + 1) / 2 - 1;
    return Math.abs(row - midRow) > cellLength / 2;
  }
};

export default Board;
