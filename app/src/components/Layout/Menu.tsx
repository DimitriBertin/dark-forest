import { css } from '@emotion/css'
import { Link } from 'react-router-dom'
import Colors from '../../core/Colors'
import { toRem } from '../../core/Settings'

const Style = css({
  marginLeft: toRem(20),
  a: {
    textDecoration: 'none',
    fontSize: toRem(11),
    lineHeight: 1.4,
    color: Colors.primary,
  },
})

function Menu(): JSX.Element {
  return (
    <ul className={`${Style} list-reset flex items-center menu`}>
      <li>
        <Link to="/clients">Factures</Link>
      </li>
      <li>
        <Link to="/clients">Clients</Link>
      </li>
      <li>
        <Link to="/clients">Bon de commandes</Link>
      </li>
      <li>
        <Link to="/clients">Modèles</Link>
      </li>
    </ul>
  )
}

export default Menu
