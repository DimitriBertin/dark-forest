import { css } from '@emotion/css'
import Colors from '../../core/Colors'
import { toRem } from '../../core/Settings'
import { Fonts } from '../../core/Typo'

const Style = css({
  display: 'flex',
  alignItems: 'center',
  padding: toRem(10),
  textDecoration: 'none',
  color: Colors.primary,
  fontSize: toRem(12),
  fontFamily: Fonts.title,
  span: {
    marginRight: toRem(10),
    color: Colors.secondary,
    textTransform: 'uppercase',
    letterSpacing: toRem(2),
    fontWeight: 'bold',
    fontSize: toRem(12),
    fontFamily: Fonts.base,
  },
})

export default Style
