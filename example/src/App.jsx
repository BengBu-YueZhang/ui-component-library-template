import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import Button from './views/Button'
import Alert from './views/Alert'

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/button">Button</Link>
          </li>
          <li>
            <Link to="/alert">Alert</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Redirect exact from='/' to='/button'/>
          <Route exact path="/button">
            <Button/>
          </Route>
          <Route exact path="/alert">
            <Alert/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
