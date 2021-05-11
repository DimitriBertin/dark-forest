import { Layout } from './components'
import { UserProvider } from './contextes/user-context'

function App(): JSX.Element {
  return (
    <div className="App">
      <UserProvider>
        <Layout />
      </UserProvider>
    </div>
  )
}

export default App
