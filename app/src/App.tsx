import { Layout } from './components'
import { UserProvider } from './contextes/user-context'
import WebFont from 'webfontloader'
import { useEffect } from 'react'
import ComputedStyle from './core/ComputedStyle'
import { initializeApp } from 'firebase/app'
import { config } from './services/Firebase'
import { BrowserRouter as Router } from 'react-router-dom'

initializeApp(config)

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
        <Router>
          <ComputedStyle />
          <Layout />
        </Router>
      </UserProvider>
    </div>
  )
}

export default App
