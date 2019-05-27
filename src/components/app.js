import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import Logout from 'components/logout'
import DomainList from 'components/domainList'
import SecretInput from 'components/secretInput'
import NewDomainInput from 'components/newDomainInput'

const App = props => {
  if (props.isLoggedIn) {

    if (props.domainInputActive) {
      return <NewDomainInput />
    } else {
      return (
        <Fragment>
          <DomainList />
          <Logout />
        </Fragment>
      )
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
