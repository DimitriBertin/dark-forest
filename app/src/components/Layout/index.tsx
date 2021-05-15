import { LayoutProps } from './Type'
import Style from './Style'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contextes/user-context'
import { AuthLayout } from './..'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Intro from './Intro'
import Header from './Header'

function Layout({}: LayoutProps): JSX.Element {
  const { state, dispatch } = useContext(UserContext)
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user
        dispatch({
          type: 'IS_CONNECTED',
          payload: {
            uid,
            email,
            displayName,
            phone: null,
          },
        })
      } else console.log('IS DISCONNECTED')

      setLoading(false)
    })
  }, [])

  return loading ? (
    <Intro />
  ) : state.isConnected ? (
    <div className={Style}>
      <Header />
    </div>
  ) : (
    <AuthLayout />
  )
}

export default Layout
