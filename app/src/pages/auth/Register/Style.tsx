import { css } from '@emotion/css'
import { toRem } from '../../../core/Settings'

const Style = css({
  height: '100vh',
  width: '100%',
  textAlign: 'center',
  '.login': {
    '&__bottom': {
      a: {
        margin: `${toRem(10)} 0`,
      },
    },
  },
})

export default Style
