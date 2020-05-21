import React from 'react'
import ReactDOM from 'react-dom'
import './App.scss'
import { Editor } from 'containers'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Editor />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
