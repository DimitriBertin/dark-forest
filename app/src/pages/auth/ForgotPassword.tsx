import { Link } from 'react-router-dom'

function ForgotPassword(): JSX.Element {
  return (
    <>
      <h1>Vous avez oublié votre mot de passe ? </h1>
      <Link to="/login">Connexion</Link>
      <Link to="/register">Register</Link>
    </>
  )
}

export default ForgotPassword
