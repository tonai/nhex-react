import { getArray } from './utils';

export function createCirclePoint(radius: number, length: number, offset: number = 0) {
  return function(index: number) {
    const angle = 2 * offset * Math.PI / length + 2 * Math.PI / length * index;
    const x = radius * Math.sin(angle);
    const y = radius * Math.cos(angle);
    return `${x},${y}`;
  }
}

export function getStarPath(outerRadius: number, innerRadius: number, length: number) {
  const getOuterPoint = createCirclePoint(outerRadius, length);
  const getInnerPoint = createCirclePoint(innerRadius, length, 0.5);
  const path = getArray(length - 1)
    .map((_: unknown, i: number) => `${getOuterPoint(i + 1)} ${getInnerPoint(i + 1)}`)
    .join(' ');
  return `M${getOuterPoint(0)} L${getInnerPoint(0)} ${path}`;
}
