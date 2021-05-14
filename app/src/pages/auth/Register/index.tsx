import { Link } from 'react-router-dom'
import Style from './Style'
import { Title, Error } from '../../../core/Typo'
import { Field, Button } from '../../../components'
import ButtonStyle from '../../../components/Button/Style'
import { MouseEvent, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { RegisterStateType } from './Type'
import { authError } from './../../../services/Firebase'

function Register(): JSX.Element {
  const [wait, setWait] = useState<boolean>(false)
  const [formData, setFormData] = useState<RegisterStateType>({
    email: '',
    password: '',
    confirmPassword: '',
    displayName: '',
    error: null,
  })

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault()
    setWait(true)
    let error = null
    if (formData.password === '' && formData.displayName === '' && formData.email === '')
      error = 'Tous les champs (*) sont requis.'
    else if (formData.password !== formData.confirmPassword)
      error = 'La confirmation du mot de passe ne correspond pas.'
    else {
      try {
        const { email, password, displayName } = formData
        const auth = getAuth()
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        if (userCredential) updateProfile(userCredential.user, { displayName })
      } catch (e) {
        error = authError(e.code)
      } finally {
        setWait(false)
      }
    }

    setFormData({ ...formData, error })
    setTimeout(() => {
      setWait(false)
    }, 2000)
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
              placeholder="Votre nom et prenom (*) - il sera afficher sur le site"
              disabledLabel
              handleChange={(value) => setFormData({ ...formData, displayName: value })}
            />
            <Field
              type="email"
              name="register[email]"
              value=""
              id="register[email]"
              label="Votre email"
              placeholder="Email: noname@darkforest.fr (*)"
              disabledLabel
              handleChange={(value) => setFormData({ ...formData, email: value })}
            />
            <Field
              type="password"
              name="register[password]"
              value=""
              id="register[password]"
              label="Votre mot de passe"
              placeholder="Mot de passe (*)"
              disabledLabel
              handleChange={(value) => setFormData({ ...formData, password: value })}
            />
            <Field
              type="password"
              name="register[confirmPassword]"
              value=""
              id="register[confirmPassword]"
              label="Votre mot de passe"
              placeholder="Confirmer votre mot de passe"
              disabledLabel
              handleChange={(value) => setFormData({ ...formData, confirmPassword: value })}
            />
            <Button type="submit" handleClick={handleSubmit} wait={wait}>
              <span>Inscription</span>
            </Button>
            {formData.error && <p className={`error ${Error}`}>{formData.error}</p>}
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
