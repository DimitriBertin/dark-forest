import { Link } from 'react-router-dom'
import Style from './Style'
import { Title } from '../../../core/Typo'
import { Field, Button } from '../../../components'
import ButtonStyle from '../../../components/Button/Style'
import { MouseEvent, useState } from 'react'

function Register(): JSX.Element {
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
          <p>DarkForest | votre gestionnaire de factures</p>
          <h1 className={Title}>Inscrivez-vous</h1>
          <form autoComplete="off" autoSave="off">
            <Field
              type="text"
              name="register[displayName]"
              value=""
              id="register[displayName]"
              label="Votre nom & prenom"
              placeholder="Votre nom et prenom - il sera afficher sur le site"
              disabledLabel
            />
            <Field
              type="email"
              name="register[email]"
              value=""
              id="register[email]"
              label="Votre email"
              placeholder="Email: noname@darkforest.fr"
              disabledLabel
            />
            <Field
              type="password"
              name="register[password]"
              value=""
              id="register[password]"
              label="Votre mot de passe"
              placeholder="Mot de passe"
              disabledLabel
            />
            <Field
              type="password"
              name="register[confirmPassword]"
              value=""
              id="register[confirmPassword]"
              label="Votre mot de passe"
              placeholder="Confirmer votre mot de passe"
              disabledLabel
            />
            <input type="hidden" name="login[token]" id="login[token]" defaultValue="" />
            <Button type="submit" handleClick={logIn} wait={wait}>
              <span>Inscription</span>
            </Button>
          </form>
          <div className="flex flex-col items-center login__bottom">
            <Link to="/login" className={`login__register ${ButtonStyle('border')}`}>
              Déjà inscrit ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
