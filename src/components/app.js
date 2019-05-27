import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Logout from 'components/logout'
import DomainList from 'components/domainList'
import SecretInput from 'components/secretInput'
import NewDomainInput from 'components/newDomainInput'

class App extends Component {
  static displayName = 'App'

  componentDidMount () {
    this.props.start()
  }

  render () {
    if (this.props.isLoggedIn) {

      if (this.props.domainInputActive) {
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
}

export default connect(
  state => ({
    isLoggedIn: Boolean(state.secret),
    domainInputActive: state.domainInputActive,
    secret: state.secret
  }),
  dispatch => ({
    start: () => dispatch({ type: 'start' })
  })
)(App)

export const actions = {
  start: state => state
}
