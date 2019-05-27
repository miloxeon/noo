import React from 'react'
import { connect } from 'react-redux'

import Logout from 'components/logout'
import SecretInput from 'components/secretInput'
import NewDomainInput from 'components/newDomainInput'

const App = props => {
  if (props.isLoggedIn) {

    if (props.domainInputActive) {
      return <NewDomainInput />
    } else {
      return <Logout />
    }

  } else {
    return <SecretInput />
  }
}

App.displayName = 'App'

export default connect(
  state => ({
    isLoggedIn: Boolean(state.secret),
    domainInputActive: state.domainInputActive,
    secret: state.secret
  })
)(App)

export const actions = {}
