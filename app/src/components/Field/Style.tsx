import { css } from '@emotion/css'
import Colors from '../../core/Colors'
import { toRem } from '../../core/Settings'
import { Fonts } from '../../core/Typo'

const Style = css({
  margin: toRem(20),
  label: {
    display: 'block',
    fontSize: toRem(16),
    color: Colors.primary,
  },
  input: {
    width: '100%',
    maxWidth: toRem(400),
    height: toRem(40),
    marginTop: toRem(10),
    padding: `0 ${toRem(10)}`,
    fontSize: toRem(12),
    fontFamily: Fonts.title,
    background: 'none',
    border: `1px solid ${Colors.border}`,
    borderRadius: toRem(5),
  },
})

export default Style
