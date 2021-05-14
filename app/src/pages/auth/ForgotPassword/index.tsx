import { Link } from 'react-router-dom'
import Style from './Style'
import { Title } from '../../../core/Typo'
import { Field, Button } from '../../../components'
import ButtonStyle from '../../../components/Button/Style'
import { MouseEvent, useState } from 'react'

function ForgotPassword(): JSX.Element {
  const [wait, setWait] = useState<boolean>(false)

  const logIn = (e: MouseEvent) => {
    e.preventDefault()
    setWait(true)
    console.log('Try to log in')
  }

  return (
    <div className={`forgot-password flex flex-col justify-center ${Style}`}>
      <div className="row">
        <div className="offset-1 col-10">
          <p>DarkForest | votre gestionnaire de factures</p>
          <h1 className={Title}>Vous avez oublié votre mot de passe ? No panic</h1>
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
            <input type="hidden" name="login[token]" id="login[token]" defaultValue="" />
            <Button type="submit" handleClick={logIn} wait={wait}>
              <span>Retrouvez mon mot de passe</span>
            </Button>
          </form>
          <div className="flex flex-col items-center login__bottom">
            <Link to="/login" className={`login__register ${ButtonStyle('border')}`}>
              Revenir à la connexion
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
