import { LayoutProps } from './Type'
import Style from './Style'

function Layout({}: LayoutProps): JSX.Element {
  return (
    <div className={Style}>
      <header role="banner">Un super header de layout</header>
      <main>Un super layout</main>
      <footer>Un super footer de layout</footer>
    </div>
  )
}

export default Layout
