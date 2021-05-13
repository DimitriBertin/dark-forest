import { Link } from 'react-router-dom'
import Style from './Style'
import { Title } from './../../../core/Typo'

function Login(): JSX.Element {
  return (
    <div className={`login ${Style}`}>
      <div className="row">
        <div className="offset-1 col-10">
          <h1 className={Title}>Gestionnaire de facture</h1>
          <form>
            <input type="text" name="login[email]" id="login[email]" defaultValue="" />
            <input type="password" name="login[password]" id="login[password]" defaultValue="" />
            <input type="hidden" name="login[token]" id="login[token]" defaultValue="" />
            <button type="submit">Connexion</button>
          </form>
          <Link to="/register">Register</Link>
          <Link to="/forgot-password">Forgot password</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
