import { CSSProperties } from 'react';

export interface IconProps {
  color?: string
  style?: CSSProperties
  width: number
}

export interface FoundationProps {
  cx: number
  cy: number
  width: number
}

export interface ModuleProps {
  color?: string
  cx: number
  cy: number
  width: number
}

export interface SvgProps {
  next?: boolean
  prev?: boolean
  style?: CSSProperties
  width: number
}

export enum Clips {
  Hex = 'Hex',
  Quarter = 'Quarter',
  QuarterNext = 'QuarterNext',
  QuarterPrev = 'QuarterPrev'
}
