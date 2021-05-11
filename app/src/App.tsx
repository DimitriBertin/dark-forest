import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthLayout, Layout } from './components'

function App(): JSX.Element {
  const [userConnected, setUserConnected] = useState<boolean>(false)

  return (
    <div className="App">
      <Router>{userConnected ? <Layout /> : <AuthLayout />}</Router>
    </div>
  )
}

export default App
