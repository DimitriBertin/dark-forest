import Grid from './core/Grid'
import { Layout } from './components'
import { UserProvider } from './contextes/user-context'

function App(): JSX.Element {
  return (
    <div className="App">
      <UserProvider>
        <Grid />
        <Layout />
      </UserProvider>
    </div>
  )
}

export default App
