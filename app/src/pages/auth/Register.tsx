import { Link } from 'react-router-dom'

function Register(): JSX.Element {
  return (
    <>
      <h1>Vous voulez faire partie de l&lsquo;aventure</h1>
      <Link to="/login">Connexion</Link>
      <Link to="/forgot-password">Forgot Password</Link>
    </>
  )
}

export default Register
