import { Link } from 'react-router-dom'

function Login(): JSX.Element {
  return (
    <>
      <h1>Éditer simplement une facture avec Dark forest</h1>
      <form>
        <input type="text" name="login[email]" id="login[email]" value="" />
        <input type="password" name="login[password]" id="login[password]" value="" />
        <input type="hidden" name="login[token]" id="login[token]" value="" />
        <button type="submit">Connexion</button>
      </form>
      <Link to="/register">Register</Link>
      <Link to="/forgot-password">Forgot password</Link>
    </>
  )
}

export default Login
