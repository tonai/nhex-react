export interface Position {
  left: number
  top: number
}

export type TestFn = (ref: HTMLElement | null, position: Position) => boolean;
