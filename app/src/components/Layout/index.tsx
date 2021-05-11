import { LayoutProps } from './Type'
import Style from './Style'
import { useContext } from 'react'
import { UserContext } from '../../contextes/user-context'
import { AuthLayout } from './..'

function Layout({}: LayoutProps): JSX.Element {
  const { state } = useContext(UserContext)

  return state.isConnected ? <div className={Style} /> : <AuthLayout />
}

export default Layout
