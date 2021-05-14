import { Link } from 'react-router-dom'
import Style from './Style'
import { Title, DefaultLink } from './../../../core/Typo'
import { Field, Button } from './../../../components'
import ButtonStyle from './../../../components/Button/Style'
import { MouseEvent } from 'react'

function Login(): JSX.Element {
  const logIn = (e: MouseEvent) => {
    e.preventDefault()
    console.log('Try to log in')
  }

  return (
    <div className={`login flex flex-col justify-center ${Style}`}>
      <div className="row">
        <div className="offset-1 col-10">
          <p>DarkForest | votre gestionnaire de factures</p>
          <h1 className={Title}>Connectez-vous</h1>
          <form>
            <Field
              type="email"
              name="login[email]"
              value=""
              id="login[email]"
              label="Votre email"
              placeholder="Email: noname@darkforest.fr"
              disabledLabel
            />
            <Field
              type="password"
              name="login[password]"
              value=""
              id="login[password]"
              label="Votre mot de passe"
              placeholder="Mot de passe"
              disabledLabel
            />
            <input type="hidden" name="login[token]" id="login[token]" defaultValue="" />
            <Button type="submit" handleClick={logIn}>
              <span>Connexion</span>
            </Button>
          </form>
          <div className="flex flex-col items-center login__bottom">
            <Link to="/forgot-password" className={DefaultLink}>
              Vous avez oublié votre mot de passe ?
            </Link>
            <Link to="/register" className={`login__register ${ButtonStyle('border')}`}>
              Pas encore inscrit ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
