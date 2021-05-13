import { Global, css } from '@emotion/react'
import Colors from './Colors'
import { BasicStyleType } from './Type'

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
    background: Colors.background,
    '*': {
      boxSizing: 'border-box',
    },
  },
}

function Base(): JSX.Element {
  return <Global styles={css(Style)} />
}

export default Base
