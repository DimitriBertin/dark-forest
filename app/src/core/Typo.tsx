import { css } from '@emotion/css'
import { toRem } from './../core/Settings'
import Colors from './Colors'

export const Fonts = {
  title: 'Cutive Mono, monospace',
  base: 'Montserrat, sans-serif',
}

export const Title = css({
  fontSize: toRem(32),
  fontFamily: Fonts.title,
  color: Colors.primary,
})

export const DefaultLink = css({
  fontSize: toRem(12),
  color: Colors.primary,
})
