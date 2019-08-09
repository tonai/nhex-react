import { Position } from '../types';

export function isHover(ref: HTMLElement | null, position: Position) {
  if (!ref) {
    return false;
  }
  const { left, top } = position;
  const { offsetHeight, offsetLeft, offsetTop, offsetWidth } = ref;
  return left >= offsetLeft&& left <= offsetLeft + offsetWidth && top >= offsetTop && top <= offsetTop + offsetHeight;
}
