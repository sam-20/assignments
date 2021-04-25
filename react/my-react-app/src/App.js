
import Signin from './pages/signin/Signin'
import Signup from './pages/signup/Signup'
import Dashboard from './pages/dashboard/Dashboard'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (

    <Switch>

      <Route exact path='/' component={Signin} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/dashboard' component={Dashboard} />

    </Switch>


  )
}


export default App;
