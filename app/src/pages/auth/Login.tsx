import { Link } from 'react-router-dom'

function Login(): JSX.Element {
  return (
    <>
      <div className="row">
        <div className="offset-1 col-8">
          <h1>Éditer simplement une facture avec Dark forest</h1>
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
    </>
  )
}

export default Login
