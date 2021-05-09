
import Signin from './pages/signin/Signin'
import Signup from './pages/signup/Signup'
import Dashboard from './pages/dashboard/Dashboard'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (

    <div>

      <Switch>
          <Route component={Signin} exact path="/" />
          <Route component={Dashboard} exact path="/dashboard" />
          <Route component={Signup} exact path="/signup" />
      </Switch>

    </div>

  )
}


export default App;
