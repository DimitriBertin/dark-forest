import { BreakpointType } from './Type'

export const cols = 12

export const breakpoints: BreakpointType = {
  md: 990,
  lg: 1280,
  xl: 1440,
}

export function toRem(i: number): string {
  return `${i / 16}rem`
}
