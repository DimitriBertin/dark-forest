import { LayoutProps } from './Type'
import Style from './Style'
import { useContext } from 'react'
import { UserContext } from '../../contextes/user-context'
import { AuthLayout } from './..'

function Layout({}: LayoutProps): JSX.Element {
  const { state } = useContext(UserContext)

  return state.isConnected ? (
    <div className={Style}>
      <header role="banner">Un super header de layout</header>
      <main>Un super layout</main>
      <footer>Un super footer de layout</footer>
    </div>
  ) : (
    <AuthLayout />
  )
}

export default Layout
