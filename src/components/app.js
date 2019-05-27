import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import Logout from 'components/logout'
import DomainList from 'components/domainList'
import SecretInput from 'components/secretInput'
import NewDomainInput from 'components/newDomainInput'

import Button from 'ui/button'

const App = props => {
  if (props.isLoggedIn) {

    if (props.domainInputActive) {
      return <NewDomainInput />
    } else {
      return (
        <Fragment>
          <DomainList />
          <Button
            autoFocus
            type='button'
            onClick={ props.activateDomainInput }
          >
            Add
          </Button>
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
  }),
  dispatch => ({
    activateDomainInput: () => dispatch({ type: 'activateDomainInput' })
  })
)(App)

export const actions = {
  activateDomainInput: state => ({ ...state,
    domainInputActive: true
  })
}
