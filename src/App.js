import React from 'react'
import Navbar from './components/Nav/Navbar'
import './App.css'
import EmailInput from './components/email-input'
import VideoBoxes from '../src/components/Videos'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import { Button } from './components/button'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (event) {
    this.setState({ email: event.target.value })
  }
  render () {
    return (
      <div className='App'>
        <Navbar />

        <>
          <EmailInput
            value={this.state.email}
            placeholder='Enter email address'
            handleChange={this.handleChange}
          />

          <VideoBoxes />
          {/* <><Button> Submit</Button>  */}
        </>
      </div>
    )
  }
}

export default App
