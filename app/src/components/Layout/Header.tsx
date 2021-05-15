import { css } from '@emotion/css'
import Colors from '../../core/Colors'
import { toRem } from '../../core/Settings'
import { Logo } from './..'
import Menu from './Menu'

const Style = css({
  height: toRem(60),
  boxShadow: '0px 0px 6px rgba(0, 0 , 0, 0.25)',
  li: {
    marginRight: toRem(10),
  },
  '.menu': {
    marginLeft: toRem(20),
    a: {
      textDecoration: 'none',
      fontSize: toRem(11),
      lineHeight: 1.4,
      color: Colors.primary,
    },
  },
})

function Header(): JSX.Element {
  return (
    <header className={`header flex items-center ${Style}`}>
      <Logo />
      <Menu />
    </header>
  )
}

export default Header
