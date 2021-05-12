import { Global, css } from '@emotion/react'
import { StyleReducerType, StyleType } from './Type'
import { cols, breakpoints } from '../Settings'

const base: StyleType = {
  '.flex': {
    display: 'flex',
    flexWrap: 'wrap',
  },
  '.flex-col': {
    flexDirection: 'column',
  },
  '.flex-reverse': {
    flexDirection: 'row-reverse',
  },
  '.items-center': {
    alignItems: 'center',
  },
  '.justify-center': {
    justifyContent: 'center',
  },
  '.justify-between': {
    justifyContent: 'space-between',
  },
  '.justify-end': {
    justifyContent: 'flex-end',
  },
  '.justify-start': {
    justifyContent: 'flex-start',
  },
  '.text-center': {
    textAlign: 'center',
  },
  '.row': {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
}

function prepareGrid(col: number, breakpoint?: string): StyleReducerType {
  const data: StyleReducerType = {}
  data[`.${breakpoint ? `${breakpoint}-` : ''}col-${col}`] = {
    maxWidth: `${(col / cols) * 100}%`,
    flexBasis: `${(col / cols) * 100}%`,
    width: `${(col / cols) * 100}%`,
  }

  data[`.${breakpoint ? `${breakpoint}-` : ''}offset-${col}`] = {
    marginLeft: `${(col / cols) * 100}%`,
  }

  return data
}

const baseCol: StyleReducerType = [...Array(cols).keys()].reduce<StyleReducerType>((acc, col) => {
  acc = {
    ...acc,
    ...prepareGrid(col),
  }

  return acc
}, {})

const gridBaseCol: StyleReducerType = Object.keys(breakpoints).reduce<StyleReducerType>((acc, breakpoint) => {
  let nObj: StyleReducerType = {}

  for (const col of [...Array(cols).keys()]) {
    nObj = {
      ...nObj,
      ...prepareGrid(col, breakpoint),
    }
  }

  for (const key of Object.keys(base)) {
    nObj[`.${breakpoint}-${key.replace('.', '')}`] = base[key]
  }

  acc[`@media all (min-width: ${breakpoints[breakpoint]}px)`] = nObj
  return acc
}, {})

function Grid(): JSX.Element {
  return <Global styles={css([base, baseCol, gridBaseCol])} />
}

export default Grid
