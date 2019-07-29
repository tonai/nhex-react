import { CSSProperties } from 'react';

export interface SvgProps {
  next?: boolean
  prev?: boolean
  width: number,
  style?: CSSProperties 
}

export enum Clips {
  Hex = 'Hex',
  Quarter = 'Quarter',
  QuarterNext = 'QuarterNext',
  QuarterPrev = 'QuarterPrev'
}
