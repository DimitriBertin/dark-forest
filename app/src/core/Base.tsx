import { Global, css } from '@emotion/react'
import Colors from './Colors'
import { BasicStyleType } from './Type'
import { Fonts } from './Typo'

const Style: BasicStyleType = {
  'html, body': {
    width: '100vw',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
  },
  body: {
    overflowX: 'hidden!important',
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    fontFamily: Fonts.base,
    background: Colors.background,
    '*': {
      boxSizing: 'border-box',
    },
  },
  '.sr-only': {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    border: 0,
  },
  '.h-full': {
    height: '100vh',
  },
  '.mx-auto': {
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  '.list-reset': {
    padding: 0,
    listStyle: 'none',
  },
}

function Base(): JSX.Element {
  return <Global styles={css(Style)} />
}

export default Base
