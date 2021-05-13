import { Layout } from './components'
import { UserProvider } from './contextes/user-context'
import WebFont from 'webfontloader'
import { useEffect } from 'react'
import ComputedStyle from './core/ComputedStyle'

function App(): JSX.Element {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Cutive Mono', 'Newsreader:200'],
      },
    })
  }, [])

  return (
    <div className="App">
      <UserProvider>
        <ComputedStyle />
        <Layout />
      </UserProvider>
    </div>
  )
}

export default App
