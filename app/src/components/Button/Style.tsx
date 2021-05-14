import { css } from '@emotion/css'
import Colors from '../../core/Colors'
import { toRem } from '../../core/Settings'
import { Fonts } from '../../core/Typo'

const Style = (theme: string): string =>
  css(
    {
      fontSize: toRem(12),
      fontFamily: Fonts.base,
      border: 0,
      borderRadius: toRem(5),
      padding: `${toRem(10)} ${toRem(20)}`,
      background: Colors[theme],
      color: Colors.white,
    },
    theme === 'border' && {
      background: 'none',
      color: Colors.secondary,
      border: `1px solid ${Colors.secondary}`,
      textDecoration: 'none',
    },
  )

export default Style
