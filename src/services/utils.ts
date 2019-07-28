export function getArray(length: number): unknown[] {
  return Array.apply(null, new Array(length));
}

export function modulo(index: number, max: number): number {
  return ((index % max) + max) % max;
}
