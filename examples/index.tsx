import React from 'react'
import ReactDOM from 'react-dom'
import * as UI from './node_modules/react-ui-components-library';


function App() {
  return (
    <div className="App">
      <UI.Button></UI.Button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
