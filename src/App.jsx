import { hot } from 'react-hot-loader'
import React from 'react'
import './App.css'
import AddMeowCatInfo from './containers/AddMeowCatInfo'

const message = 'Welcome to react-redux'
const App = () => (
  <div className='App'>
    <h1>{message}</h1>
    <AddMeowCatInfo />
  </div>
)

export default hot(module)(App)
