import { Link } from 'react-router-dom'
import Style from './Style'

function Logo(): JSX.Element {
  return (
    <Link to="/" className={`logo ${Style}`}>
      <span>DarkForest</span>| gestionnaire de factures
    </Link>
  )
}

export default Logo
