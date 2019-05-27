import React from 'react'
import { connect } from 'react-redux'
import Logout from 'components/logout'
import SecretInput from 'components/secretInput'

const Guest = props => <SecretInput />

const User = props => <Logout />

const App = props => props.isLoggedIn ?
  <User { ...props } /> :
  <Guest { ...props } />

App.displayName = 'App'

export default connect(
  state => ({
    isLoggedIn: Boolean(state.secret),
    secret: state.secret
  })
)(App)

export const actions = {}
