import { Link } from 'react-router-dom'
import Style from './Style'
import { Title, DefaultLink } from './../../../core/Typo'
import { Field, Button, Logo } from './../../../components'
import ButtonStyle from './../../../components/Button/Style'
import { MouseEvent, useState } from 'react'

function Login(): JSX.Element {
  const [wait, setWait] = useState<boolean>(false)

  const logIn = (e: MouseEvent) => {
    e.preventDefault()
    setWait(true)
    console.log('Try to log in')
  }

  return (
    <div className={`login flex flex-col justify-center ${Style}`}>
      <div className="row">
        <div className="offset-1 col-10">
          <Logo />
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
              handleChange={(value) => console.log(value)}
            />
            <Field
              type="password"
              name="login[password]"
              value=""
              id="login[password]"
              label="Votre mot de passe"
              placeholder="Mot de passe"
              disabledLabel
              handleChange={(value) => console.log(value)}
            />
            <input type="hidden" name="login[token]" id="login[token]" defaultValue="" />
            <Button type="submit" handleClick={logIn} wait={wait}>
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
