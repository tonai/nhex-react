import { Position, TestFn } from '../types';

function getData(ref: HTMLElement, position: Position) {
  const { left: x, top: y } = position;
  const { offsetHeight: height, offsetLeft: left, offsetTop: top, offsetWidth: width } = ref;
  return { height, left, top, width, x, y };
}

function getLineData(x1: number, y1: number, x2: number, y2: number) {
  const a = (y2 - y1) / (x2 - x1);
  const b = - a * x1 + y1;
  return { a, b };
}

function checkPointWithLine(x1: number, y1: number, x2: number, y2: number, x: number, y: number, comp: 1 | -1 = 1) {
  const { a, b } = getLineData(x1, y1, x2, y2);
  return comp * y >= comp * (a * x + b);
}

export const isInsideSquare: TestFn = (ref, position) => {
  if (!ref) {
    return false;
  }
  const { height, left, top, width, x, y } = getData(ref, position);
  return x >= left && x <= left + width && y >= top && y <= top + height;
}

export const isInsideHex: TestFn = (ref, position) => {
  if (!ref) {
    return false;
  }
  // * - 1 - 2 - *
  // 6 - * - * - 3
  // * - 5 - 4 - *
  const { height, left, top, width, x, y } = getData(ref, position);
  const x1 = left + width / 4;
  const y1 = top;
  const x2 = left + 3 * width / 4;
  const y2 = top;
  const x3 = left + width;
  const y3 = top + height / 2;
  const x4 = left + 3 * width / 4;
  const y4 = top + height;
  const x5 = left + width / 4;
  const y5 = top + height;
  const x6 = left ;
  const y6 = top + height / 2;
  return y >= top
    && y <= top + height
    && checkPointWithLine(x6, y6, x1, y1, x, y)
    && checkPointWithLine(x4, y4, x3, y3, x, y, -1)
    && checkPointWithLine(x2, y2, x3, y3, x, y)
    && checkPointWithLine(x6, y6, x5, y5, x, y, -1);
}
